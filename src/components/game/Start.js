import classes from './Start.module.css';

function Start(props){

    var teamOne = props.teamOne;
    var teamTwo = props.teamTwo;
    function war() {
        console.log(teamOne);
        console.log(teamTwo);

        var power1 = teamOne.totalStrength;
        var power2 = teamTwo.totalStrength;
        var winner = 0;

        if(power1 === 0 || power2 === 0) return;
        
        console.log(power1);
        console.log(power2);

        // horse counters ranged
        if (teamOne.horse>teamTwo.ranged) {
            power1 *= 1.3;
        } else if(teamTwo.horse>teamOne.ranged) {
            power2 *= 1.3;
        }
        
        // siege counters castle
        if (teamOne.siege>teamTwo.castle) {
            power1 *= 1.5;
        } else if(teamTwo.siege>teamTwo.castle) {
            power2 *= 1.5;
        }

        console.log(power1);
        console.log(power2);

        winner = (power1>power2) ? 1 : 2 
        console.log("Winner:"+winner);
    }

    return <div className={classes.buttonRow}>
        <button className={classes.startBtn} onClick = {war}>Start War!</button>
    </div>
}

export default Start;