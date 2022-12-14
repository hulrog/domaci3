import { useContext } from 'react';

import Board from "../components/game/Board";
import Team from "../components/game/Team";

import TeamsContext from "../context/teams-context";
function HomePage() { 
  const teamsCtx = useContext(TeamsContext);

  return <div> 
    <h1> Home Page </h1>
    <p style={{textAlign: "center"}}>
      The Board game below is a Seven Kingdoms war simulator.
      Pick out houses to form teams and put them to battle.
      Houses have 5 types of forces: Horsemen, Footmen, Archers,
      Siege Engines and Castles. (Countering each other in 
      pre-defined ways.) The number
      of each of those is displayed. Besides those, Houses
      have their family sigil, family name, name of their seat 
      and the name of the region it's located in displayed. 
      There is a war button which simulates the outcome
      of the war - the winning side and casualties
      calculated in an auto-resolve style algorithm.
    </p>
    <Board teamOne = {teamsCtx.teamOne} teamTwo = {teamsCtx.teamTwo}>
      <Team side = "One" houses = {teamsCtx.teamOne} />
      <Team side = "Two" houses = {teamsCtx.teamTwo} />
    </Board>
  </div>
}

export default HomePage;