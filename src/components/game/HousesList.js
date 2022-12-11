import House from './House';
import classes from './HousesList.module.css';

function HousesList(props) {
    return (
        <ul className = {classes.list}>
            {props.houses.map(house => 
            <House 
                key={house.id}
                id ={house.id} 
                name={house.name}
                region = {house.region} 
                seat={house.seat}
                horse = {house.horse} 
                foot = {house.foot}
                ranged = {house.ranged}
                siege = {house.siege}
                castle = {house.castle}
            />)}
        </ul>
    )
}

export default HousesList;