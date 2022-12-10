import classes from './Board.module.css';

function Board(props){
    return <div class={classes.frame}>
        {props.children}
    </div>
}

export default Board;