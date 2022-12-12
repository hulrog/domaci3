import classes from './Region.module.css';

function Region(props) {
     return(
        <li>
            <div className = {classes.region}>
                <div className = {classes.image}>
                    <img src = {`photos/${props.name}.jpg`} alt="N/A"/>
                </div>
                <div className = {classes.title}>
                    <h2>{props.name}</h2>
                </div>
                <div className = {classes.information}>
                    <span>Population: {props.population}</span> <br></br>
                    <span>Goods:
                        {(props.goods).map(good => (
                            <span> -{good}-</span> 
                        ))}
                    </span>
                </div>
                <p> {props.description} </p>
            </div>
        </li>
    )
}

export default Region;