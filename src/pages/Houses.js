import HousesList from "../components/game/HousesList";

const houses = [
  {
    id: "1",
    name: "Targaryen",
    region: "The Crownlands",
    seat: "King's Landing",
    horse: 2000,
    foot: 6000,
    ranged: 2000,
    siege: 20,
    castle: 5
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
    castle: 7
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
    castle: 5
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
    castle: 10
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
    castle: 5
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
    castle: 10
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
    castle: 5
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
    castle: 10
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
    castle: 5
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
    castle: 5
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
    castle: 2
  },
  {
    id: "13",
    name: "Blackwood",
    region: "The Riverlands",
    seat: "Raventree Hall",
    horse: 200,
    foot: 200,
    ranged: 500,
    siege: 5,
    castle: 3
  },
  {
    id: "14",
    name: "Bracken",
    region: "The Riverlands",
    seat: "Stonehedge",
    horse: 400,
    foot: 200,
    ranged: 100,
    siege: 5,
    castle: 3
  },
  {
    id: "15",
    name: "Yronwood",
    region: "Dorne",
    seat: "Yronwood",
    horse: 500,
    foot: 500,
    ranged: 1000,
    siege: 5,
    castle: 5
  },
  {
    id: "16",
    name: "Mormont",
    region: "The North",
    seat: "Bear Island",
    horse: 100,
    foot: 600,
    ranged: 200,
    siege: 10,
    castle: 2
  },
  {
    id: "17",
    name: "Frey",
    region: "The Riverlands",
    seat: "The Crossing",
    horse: 500,
    foot: 800,
    ranged: 800,
    siege: 10,
    castle: 5
  },
  {
    id: "18",
    name: "Harlaw",
    region: "The Iron Islands",
    seat: "Harlaw",
    horse: 100,
    foot: 1000,
    ranged: 100,
    siege: 5,
    castle: 2
  },
  {
    id: "19",
    name: "Selmy",
    region: "The Stormalnds",
    seat: "Haystack Hall",
    horse: 500,
    foot: 1000,
    ranged: 500,
    siege: 5,
    castle: 2
  },
  {
    id: "20",
    name: "Marbrand",
    region: "The Westerlands",
    seat: "Ashemark",
    horse: 500,
    foot: 1000,
    ranged: 500,
    siege: 5,
    castle: 1
  },
  {
    id: "21",
    name: "Uller",
    region: "Dorne",
    seat: "Hellholt",
    horse: 500,
    foot: 500,
    ranged: 500,
    siege: 5,
    castle: 1
  },
  {
    id: "22",
    name: "Lefford",
    region: "The Westerlands",
    seat: "Golden Tooth",
    horse: 1000,
    foot: 1000,
    ranged: 200,
    siege: 10,
    castle: 5
  },
  {
    id: "23",
    name: "Dustin",
    region: "The North",
    seat: "Ashemark",
    horse: 200,
    foot: 1000,
    ranged: 400,
    siege: 10,
    castle: 2
  },
  {
    id: "24",
    name: "Corbray",
    region: "The Vale",
    seat: "Heart's Home",
    horse: 500,
    foot: 1000,
    ranged: 500,
    siege: 5,
    castle: 1
  },
  {
    id: "25",
    name: "Ashford",
    region: "The Reach",
    seat: "Ashford",
    horse: 500,
    foot: 1000,
    ranged: 500,
    siege: 5,
    castle: 1
  },
  {
    id: "26",
    name: "Bar Emmon",
    region: "The Crownlands",
    seat: "Sharp Point",
    horse: 100,
    foot: 500,
    ranged: 200,
    siege: 5,
    castle: 1
  },
  {
    id: "27",
    name: "Brax",
    region: "The Westerlands",
    seat: "Hornvale",
    horse: 500,
    foot: 1000,
    ranged: 500,
    siege: 5,
    castle: 1
  },
  {
    id: "28",
    name: "Smallwood",
    region: "The Riverlands",
    seat: "Acorn Hall",
    horse: 600,
    foot: 600,
    ranged: 600,
    siege: 5,
    castle: 1
  },
  {
    id: "29",
    name: "Rykker",
    region: "The Crownlands",
    seat: "Duskendale",
    horse: 200,
    foot: 1000,
    ranged: 200,
    siege: 10,
    castle: 1
  },
  {
    id: "30",
    name: "Royce",
    region: "The Vale",
    seat: "Runestone",
    horse: 500,
    foot: 1000,
    ranged: 500,
    siege: 10,
    castle: 5
  },
  {
    id: "31",
    name: "Tarly",
    region: "The Reach",
    seat: "Hornhill",
    horse: 700,
    foot: 1200,
    ranged: 400,
    siege: 10,
    castle: 5
  },
  {
    id: "32",
    name: "Dayne",
    region: "Dorne",
    seat: "Starfall",
    horse: 600,
    foot: 900,
    ranged: 200,
    siege: 5,
    castle: 5
  },
  {
    id: "33",
    name: "Celtigar",
    region: "Dorne",
    seat: "Starfall",
    horse: 200,
    foot: 500,
    ranged: 200,
    siege: 5,
    castle: 1
  },
  {
    id: "34",
    name: "Darry",
    region: "The Riverlands",
    seat: "Darry",
    horse: 300,
    foot: 400,
    ranged: 200,
    siege: 5,
    castle: 1
  },
  {
    id: "35",
    name: "Farman",
    region: "The Westerlands",
    seat: "Fair Isle",
    horse: 200,
    foot: 500,
    ranged: 500,
    siege: 10,
    castle: 5
  },
  {
    id: "36",
    name: "Webber",
    region: "The Reach",
    seat: "Coldmoat",
    horse: 200,
    foot: 500,
    ranged: 500,
    siege: 5,
    castle: 5
  },
  {
    id: "37",
    name: "Goodbrother",
    region: "The Iron Islands",
    seat: "Great Wyk",
    horse: 0,
    foot: 1200,
    ranged: 100,
    siege: 10,
    castle: 5
  },
  {
    id: "38",
    name: "Botley",
    region: "The Iron Islands",
    seat: "Lordsport",
    horse: 100,
    foot: 1000,
    ranged: 500,
    siege: 10,
    castle: 1
  },
  {
    id: "39",
    name: "Estermont",
    region: "The Stormlands",
    seat: "Greenstone",
    horse: 200,
    foot: 500,
    ranged: 500,
    siege: 5,
    castle: 5
  }, 
  {
    id: "40",
    name: "Grafton",
    region: "The Vale",
    seat: "Gulltown",
    horse: 300,
    foot: 1500,
    ranged: 200,
    siege: 10,
    castle: 2
  }
];

function HousesPage() { 
  return <div> 
    <h1> Houses </h1>
    <p style={{textAlign: "center"}}>
      The Houses page displays a list of houses,
      in cards the same way as on the Home page. With buttons
      to add a house into team 1 or team 2 or remove them.
    </p>
    <HousesList houses={houses}></HousesList>
    </div>
  }
  
  export default HousesPage;