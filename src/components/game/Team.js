import classes from './Team.module.css';
import HousesList from './HousesList';

const houses = [
    {
      id: "1",
      name: "Targaryen",
      region: "Crownlands",
      seat: "King's Landing",
      horse: 1000,
      foot: 5000,
      ranged: 1000,
      siege: 10,
      castle: 2
    },
    {
      id: "2",
      name: "Stark",
      region: "The North",
      seat: "Winterfell",
      horse: 500,
      foot: 3000,
      ranged: 500,
      siege: 10,
      castle: 2},
  ];

function Team(props){
    return <div className={classes.wrapper}>
        <h2>{props.side}</h2>
        <HousesList houses={houses}></HousesList>
    </div>
}

export default Team;