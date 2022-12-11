import HousesList from "../components/game/HousesList";

const houses = [
  {
    id: "1",
    name: "Targaryen",
    region: "The Crownlands",
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
    castle: 2
  },
  {
    id: "3",
    name: "Tully",
    region: "The Riverlands",
    seat: "Riverrun",
    horse: 1000,
    foot: 2000,
    ranged: 1000,
    siege: 5,
    castle: 1
  },
  {
    id: "4",
    name: "Baratheon",
    region: "The Stormlands",
    seat: "Storm's End",
    horse: 1000,
    foot: 5000,
    ranged: 500,
    siege: 5,
    castle: 1
  },
  {
    id: "5",
    name: "Tyrell",
    region: "The Reach",
    seat: "Highgarden",
    horse: 2000,
    foot: 4000,
    ranged: 2000,
    siege: 10,
    castle: 1
  },
  {
    id: "6",
    name: "Lannister",
    region: "The Westerlands",
    seat: "Casterly Rock",
    horse: 2000,
    foot: 3000,
    ranged: 1000,
    siege: 15,
    castle: 3
  },
  {
    id: "7",
    name: "Greyjoy",
    region: "The Iron Islands",
    seat: "Pyke",
    horse: 0,
    foot: 2000,
    ranged: 0,
    siege: 10,
    castle: 1
  },
  {
    id: "8",
    name: "Arryn",
    region: "The Vale",
    seat: "The Eyrie",
    horse: 2000,
    foot: 2000,
    ranged: 1000,
    siege: 5,
    castle: 2
  },
  {
    id: "9",
    name: "Martell",
    region: "Dorne",
    seat: "Sunspear",
    horse: 1000,
    foot: 1000,
    ranged: 2000,
    siege: 5,
    castle: 1
  },
  {
    id: "10",
    name: "Hightower",
    region: "The Reach",
    seat: "Oldtown",
    horse: 500,
    foot: 4000,
    ranged: 2000,
    siege: 10,
    castle: 2
  },
  {
    id: "11",
    name: "Velaryon",
    region: "The Crownlands",
    seat: "Driftmark",
    horse: 200,
    foot: 1000,
    ranged: 1000,
    siege: 5,
    castle: 2
  },
  {
    id: "12",
    name: "Bolton",
    region: "The North",
    seat: "The Dreadfort",
    horse: 300,
    foot: 500,
    ranged: 500,
    siege: 5,
    castle: 1
  },
];

function HousesPage() { 
    return <div> 
      <h1> Houses </h1>
      <p>
            The Houses page displays a list of houses,
            in cards the same way as on the Home page. With buttons
            to add a house into team 1 or team 2 or remove them.
        </p>
        <HousesList houses={houses}></HousesList>
    </div>
  }
  
  export default HousesPage;