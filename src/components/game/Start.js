import { useState } from 'react';

import classes from './Start.module.css';

import Backdrop from '../layout/Backdrop';
import Modal from '../layout/Modal';

function Start(props){

    const [modalIsOpen, setModalIsOpen] = useState(false);
    var [winner, setWinner] = useState(0);
    var [ratio, setRatio] = useState(1);
    
    function refreshPageHandler() {
        window.location.reload(false);
    }
    function closeModalHandler() {
        setModalIsOpen(false);
    }

    var teamOne = props.teamOne;
    var teamTwo = props.teamTwo;
    function war() {

        var power1 = teamOne.totalStrength;
        var power2 = teamTwo.totalStrength;

        if(power1 === 0 || power2 === 0) {
            setModalIsOpen(true);
            return;
        };
        
        console.log(power1);
        console.log(power2);

        // horse counters ranged
        if (teamOne.horse>teamTwo.ranged) {
            power1 *= 1.1;
        } else if(teamTwo.horse>teamOne.ranged) {
            power2 *= 1.1;
        }
        
        // siege counters castle
        if (teamOne.siege>teamTwo.castle) {
            power1 *= 1.2;
        } else if(teamTwo.siege>teamOne.castle) {
            power2 *= 1.2;
        }

        // infantry superiority
        if (teamOne.foot>teamTwo.foot) {
            power1 *= 1.2;
        } else if(teamTwo.foot>teamOne.foot) {
            power2 *= 1.2;
        }

        console.log(power1);
        console.log(power2);

        if(power1>power2){
            ratio = setRatio(power2/power1);
        }
        if(power2>power1){
            ratio = setRatio(power1/power2);
        }

        winner = setWinner((power1>power2) ? 1 : 2); 

        setModalIsOpen(true);
    }

    return <div className={classes.buttonRow}>
        <button id="startBtn" className={classes.startBtn} onClick = {war}>Start War!</button>

        {modalIsOpen ? <Modal winner={winner} ratio={ratio} onCancel={closeModalHandler} onRefresh={refreshPageHandler}/> : null}

        {modalIsOpen ? <Backdrop onCancel={closeModalHandler}/> : null}
    </div>
}

export default Start;