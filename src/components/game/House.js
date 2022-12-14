import { useContext } from 'react';

import Card from '../layout/Card.js';
import classes from './House.module.css';

import TeamsContext from '../../context/teams-context.js';

function House(props) {
    const teamsCtx = useContext(TeamsContext);

    const houseIsTeamOne = teamsCtx.houseIsTeamOne(props.id);
    const houseIsTeamTwo = teamsCtx.houseIsTeamTwo(props.id);

    var isTeam = props.isTeam;
    var totalStrength = props.foot + props.horse*5 + props.ranged*2 + props.siege*50 + props.castle*100;


    function toggleTeamOneStatusHandler(){
        if(houseIsTeamOne){
            teamsCtx.removeTeamOne(props.id);
        }else{
            teamsCtx.addTeamOne({
                id: props.id,
                name: props.name,
                region: props.region,
                seat: props.seat,
                horse: props.horse,
                foot: props.foot,
                ranged: props.ranged,
                siege: props.siege,
                castle: props.castle
            });
        }
    }
    function toggleTeamTwoStatusHandler(){
        if(houseIsTeamTwo){
            teamsCtx.removeTeamTwo(props.id);
        }else{
            teamsCtx.addTeamTwo({
                id: props.id,
                name: props.name,
                region: props.region,
                seat: props.seat,
                horse: props.horse,
                foot: props.foot,
                ranged: props.ranged,
                siege: props.siege,
                castle: props.castle
            });
        }
    }

     return(
    <li style={{display: (totalStrength===0) ? 'none' : 'block' }}>
        <Card>
            <div className = {classes.left}>
                <div className = {classes.image}>
                    <img src={`sigils/House_${props.name}.svg`} alt="N/A" />
                </div>
                <div className = {classes.information}>
                    <h3>{props.name}</h3>
                    <address>
                        {props.seat}
                    </address>
                </div>
            </div>
            <table className = {classes.table}> 
            <tbody>
                <tr>
                    <td> Horse </td>
                    <td> {props.horse}</td>
                    </tr>
                <tr>
                    <td> Foot </td>
                    <td> {props.foot}</td>
                </tr>
                <tr>
                    <td> Ranged </td>
                    <td> {props.ranged}</td>
                </tr>
                <tr>
                    <td> Siege </td>
                    <td> {props.siege}</td>
                </tr>
                <tr>
                    <td> Castle </td>
                    <td> {props.castle}</td>
                </tr>
            </tbody>
            </table>
            <div className = {classes.buttonColumn}>
                <button onClick = {toggleTeamOneStatusHandler} disabled = {houseIsTeamTwo} style={{display: isTeam ? 'none' : 'block', backgroundColor: houseIsTeamOne ? "whitesmoke" : ""}}> 
                    Team One
                </button>
                <button onClick = {toggleTeamTwoStatusHandler} disabled = {houseIsTeamOne} style={{display: isTeam ? 'none' : 'block', backgroundColor: houseIsTeamTwo ? "whitesmoke" : "" }}> 
                    Team Two
                </button>
            </div>
        </Card>
    </li>
    )
}

export default House;