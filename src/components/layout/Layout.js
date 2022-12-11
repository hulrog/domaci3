import Navbar from './Navbar';
import classes from './Layout.module.css';
import Footer from './Footer';

function Layout(props) {
    return <div>
        <Navbar />
        <main className = {classes.main}>
            {props.children}
        </main>
        <Footer />
    </div>
}

export default Layout;