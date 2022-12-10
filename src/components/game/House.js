import Card from '../layout/Card.js';
import classes from './House.module.css';

function House(props) {
     return(
    <li>
        <Card>
            <div className = {classes.image}>
                <img src={`sigils/${props.name}.svg`} alt="N/A" />
            </div>
            <div className = {classes.content}>
                <h3>{props.name}</h3>
                <address>
                    {props.seat}, {props.region}
                </address>
                <table> 
                    <tr>
                        <td> Horsemen </td>
                        <td> {props.horse}</td>
                    </tr>
                    <tr>
                        <td> Men-at-Arms </td>
                        <td> {props.foot}</td>
                    </tr>
                    <tr>
                        <td> Archers </td>
                        <td> {props.ranged}</td>
                    </tr>
                    <tr>
                        <td> Siege Engines </td>
                        <td> {props.siege}</td>
                    </tr>
                    <tr>
                        <td> Castles </td>
                        <td> {props.castle}</td>
                    </tr>
                </table>
            </div>
        </Card>
    </li>
    )
}

export default House;