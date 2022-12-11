import Board from "../components/game/Board";
import Team from "../components/game/Team";

function HomePage() { 
  return <div> 
    <h1> Home Page </h1>
    <p>
      The Board game below is a Seven Kingdoms war simulator.
      Pick out houses to form teams and put them to battle.
      Houses have 5 types of forces: Horsemen, Footmen, Archers,
      Siege Engines and Castles. (Countering each other in 
      pre-defined ways.) The number
      of each of those is displayed. Besides those, Houses
      have their family sigil, family name, name of their seat 
      and the name of the region it's located in displayed. 
      There is a war button which simulates the outcome
      of the war - the winning side and  number of casualties for both 
      sides calculated in an auto-resolve style algorithm.
    </p>
    <Board>
      <Team side = "Left" />
      <Team side = "Right" />
    </Board>
  </div>
}

export default HomePage;