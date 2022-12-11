import classes from './Footer.module.css';

function Footer(){
    return <footer className={classes.footer}>
        <p> 
            Domaći 3, Petar Tomić <br></br>
            Internet tehnologije, Katedra za elektronsko poslovanje, Fakultet Organizacionih Nauka, 2022
        </p>
        <p> 
            Names and places by the Author George R.R. Martin, sigils by "A Wiki of Ice and Fire": <a href="https://awoiaf.westeros.org/index.php/Main_Page">awoiaf.westeros.org</a> <br></br>
            Fair use for educational and learning purposes only.
        </p>
    </footer>
}

export default Footer;