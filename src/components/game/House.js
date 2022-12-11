import Card from '../layout/Card.js';
import classes from './House.module.css';

function House(props) {
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
                        {props.seat}, {props.region}
                    </address>
                </div>
            </div>
            <table className = {classes.table}> 
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
            </table>
        </Card>
    </li>
    )
}

export default House;