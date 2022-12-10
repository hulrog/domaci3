import classes from './Board.module.css';

function Board(props){
    return <div className={classes.frame}>
        {props.children}
    </div>
}

export default Board;