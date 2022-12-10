import { Link } from 'react-router-dom';

function Navbar(){
    return <header>
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