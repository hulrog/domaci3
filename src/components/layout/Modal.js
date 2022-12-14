import classes from './Modal.module.css';

function Modal(props) {
    function cancelHandler() {
      props.onCancel();
    }
  
    function refreshHandler() {
      props.onRefresh();
    }
  
    var winner = props.winner;
    var ratio = props.ratio;
    var losses = "none";
    if(ratio>=0.9 && ratio<=1) {
        losses = "high";
    }
    if(ratio>=0.5 && ratio<0.9) {
        losses = "middling";
    } 
    if(ratio<0.5) {
        losses = "low";
    }
    
    return (
      <div className = {classes.modal}>
        <p> {(winner===0) ? "There are no team members." : `Team ${winner} wins with ${losses} losses!`}</p>
        <button className = {classes.modalButton} onClick={cancelHandler}>Return to Board</button>
        <button className = {classes.modalButton} onClick={refreshHandler} style={{display: (winner===0) ? 'none' : '' }}>Reset Board</button>
      </div>
    );
  }
  
  export default Modal;