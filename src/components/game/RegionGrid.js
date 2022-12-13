import classes from './RegionGrid.module.css';
import Region from './Region';

function RegionGrid(props) {
    return <ul className = {classes.list}>
        {props.regions.map(region => 
            <Region 
            key={region.id}
            id ={region.id} 
            name={region.name}
            population = {region.population} 
            description = {region.description}
            goods = {region.goods}
            houses = {region.houses}
            />)}
    </ul>
}

export default RegionGrid;