import { createContext, useState } from 'react';
const TeamsContext = createContext({
    teamOne: [],
    totalTeamOne: 0,
    teamTwo: [],
    totalTeamTwo: 0,
    addTeamOne: (teamOneHouse) => {},
    addTeamTwo: (teamTwoHouse) => {},
    removeTeamOne: (houseId) => {},
    removeTeamTwo: (houseId) => {},
    houseIsTeamOne: (houseId) => {},
    houseIsTeamTwo: (houseId) => {},
});

export function TeamsContextProvider(props) {
    const [userTeamOne, setUserTeamOne] = useState([]);
    const [userTeamTwo, setUserTeamTwo] = useState([]);

    function addTeamOneHandler(teamOneHouse) {
        setUserTeamOne((prevUserTeamOne) => {
            return prevUserTeamOne.concat(teamOneHouse);
        });
    }
    function addTeamTwoHandler(teamTwoHouse) {
        setUserTeamTwo((prevUserTeamTwo) => {
            return prevUserTeamTwo.concat(teamTwoHouse);
        });
    }

    function removeTeamOneHandler(houseId){
        setUserTeamOne(prevUserTeamOne => {
            return prevUserTeamOne.filter(house => house.id !== houseId);
        })
    }
    function removeTeamTwoHandler(houseId){
        setUserTeamTwo(prevUserTeamTwo => {
            return prevUserTeamTwo.filter(house => house.id !== houseId);
        })
    }

    function houseIsTeamOneHandler(houseId) {
        return userTeamOne.some(house => house.id === houseId);
    }
    function houseIsTeamTwoHandler(houseId) {
        return userTeamTwo.some(house => house.id === houseId);
    }
    
    const context = {
        teamOne: userTeamOne,
        totalTeamOne: userTeamOne.length,
        teamTwo: userTeamTwo,
        totalTeamTwo: userTeamTwo.length,
        addTeamOne: addTeamOneHandler,
        addTeamTwo: addTeamTwoHandler,
        removeTeamOne: removeTeamOneHandler,
        removeTeamTwo: removeTeamTwoHandler,
        houseIsTeamOne: houseIsTeamOneHandler,
        houseIsTeamTwo: houseIsTeamTwoHandler
    };
    
    return ( 
    <TeamsContext.Provider value={context}>
        {props.children}
    </TeamsContext.Provider>
    );
}

export default TeamsContext;