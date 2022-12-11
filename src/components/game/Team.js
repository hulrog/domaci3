import classes from './Team.module.css';
import HousesList from './HousesList';

function Team(props){
    return <div className={classes.wrapper}>
        <h2>{props.side}</h2>
        <HousesList houses={props.houses}></HousesList>
    </div>
}

export default Team;