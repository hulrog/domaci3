import classes from './Board.module.css';
import Start from './Start';
import House from './House';


function Board(props){
    var teamOne = props.teamOne;
    var teamTwo = props.teamTwo;
    
    var foot1 = 0;
    var horse1 = 0;
    var ranged1 = 0;
    var siege1 = 0;
    var castle1 = 0;

    var strongestHouse1 = "Team Left";
    var totalStrength1 = 0;
    var maxStrength1 = 0;

    teamOne.forEach(function (house, index) {
        foot1 += house.foot;
        horse1 += house.horse;
        ranged1 += house.ranged;
        siege1 += house.siege;
        castle1 += house.castle;
        totalStrength1 = house.foot + house.horse*5 + house.ranged*2 + house.siege*50 + house.castle*100;
        if(totalStrength1 > maxStrength1){
            maxStrength1 = totalStrength1;
            strongestHouse1 = house.name;
        }
    });
    var troopBreakdown1 = {
        totalStrength: foot1 + horse1*5 + ranged1*2 + siege1*50 + castle1*100,
        foot: foot1,
        horse: horse1,
        ranged: ranged1,
        siege: siege1,
        castle: castle1
    }

    var foot2 = 0;
    var horse2 = 0;
    var ranged2 = 0;
    var siege2 = 0;
    var castle2 = 0;

    var strongestHouse2 = "Team Left";
    var totalStrength2 = 0;
    var maxStrength2 = 0;

    teamTwo.forEach(function (house, index) {
        foot2 += house.foot;
        horse2 += house.horse;
        ranged2 += house.ranged;
        siege2 += house.siege;
        castle2 += house.castle;
        totalStrength2 = house.foot + house.horse*5 + house.ranged*2 + house.siege*50 + house.castle*100;
        if(totalStrength2 > maxStrength2){
            maxStrength2 = totalStrength2;
            strongestHouse2 = house.name;
        }
    });
    var troopBreakdown2 = {
        totalStrength: foot2 + horse2*5 + ranged2*2 + siege2*50 + castle2*100,
        foot: foot2,
        horse: horse2,
        ranged: ranged2,
        siege: siege2,
        castle: castle2
    }
      

    return <div className={classes.frame}>
        <div className={classes.upper}>
            {props.children}
        </div>
        <div className={classes.lower}>
            <div className={classes.forces}>
                <House 
                name = {strongestHouse1}
                seat= "and Allies"
                horse = {horse1} 
                foot = {foot1}
                ranged = {ranged1}
                siege = {siege1}
                castle = {castle1}
                isTeam = {true}
                />
                <Start teamOne = {troopBreakdown1} teamTwo = {troopBreakdown2}/>
                 <House 
                name = {strongestHouse2}
                seat= "and Allies"
                horse = {horse2} 
                foot = {foot2}
                ranged = {ranged2}
                siege = {siege2}
                castle = {castle2}
                isTeam = {true}
                />
            </div>
        </div>
    </div>
  
}

export default Board;