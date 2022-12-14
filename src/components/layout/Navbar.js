import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

function Navbar(){
    return <header className={classes.header}>
        <div className = {classes.title}>WESTEROS</div>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/regions'>Regions</Link></li>
                <li><Link to='/houses'>Houses</Link></li>
            </ul>
        </nav>
    </header>
}

export default Navbar;