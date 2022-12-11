import { useContext } from 'react';

import Card from '../layout/Card.js';
import classes from './House.module.css';

import TeamsContext from '../../context/teams-context.js';

function House(props) {
    const teamsCtx = useContext(TeamsContext);

    const houseIsTeamOne = teamsCtx.houseIsTeamOne(props.id);
    const houseIsTeamTwo = teamsCtx.houseIsTeamTwo(props.id);

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
    <li>
        <Card>
            <div className = {classes.left}>
                <div className = {classes.image}>
                    <img src={`sigils/${props.name}.svg`} alt="N/A" />
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
                    <td> Castles </td>
                    <td> {props.castle}</td>
                </tr>
            </tbody>
            </table>
            <div className = {classes.buttonColumn}>
                <button onClick = {toggleTeamOneStatusHandler} disabled = {houseIsTeamTwo}> 
                    {houseIsTeamOne ? "None" : "Team One"}
                </button>
                <button onClick = {toggleTeamTwoStatusHandler} disabled = {houseIsTeamOne}> 
                    {houseIsTeamTwo ? "None" : "Team Two"} 
                </button>
            </div>
        </Card>
    </li>
    )
}

export default House;