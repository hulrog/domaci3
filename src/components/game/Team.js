import classes from './Team.module.css';

function Team(props){
    return <div class={classes.wrapper}>
        <h2>{props.side}</h2>
    </div>
}

export default Team;