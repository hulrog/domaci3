import classes from './Region.module.css';

function Region(props) {
    console.log(props.houses);
     return(
        <li>
            <div className= {classes.flipCardContainer}>
                <div className = {classes.flipCard}>
                    <div className= {classes.flipCardFront}>
                        <div className = {classes.image}>
                            <img src = {`photos/${props.name}.jpg`} alt="N/A"/>
                        </div>
                        <div className = {classes.title}>
                            <h2>{props.name}</h2>
                        </div>
                        <div className = {classes.information}>
                            <span>Population: {props.population} million </span> <br></br>
                            <span>Goods:
                                {(props.goods).map((good, index) => (
                                    <span key = {index}> -{good}-</span> 
                                ))}
                            </span>
                        </div>
                        <p className = {classes.description}> {props.description} </p>
                    </div>
                    <div className = {classes.flipCardBack}>
                        {(props.houses)?.map((house, index2) => (
                            <div className = {classes.backHouse} key={index2}>
                                <img className = {classes.backSigil} src = {`sigils/House_${house}.svg`} alt="N/A"></img>
                                <span className = {classes.backName}> {house} </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Region;