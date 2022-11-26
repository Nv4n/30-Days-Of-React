import profilePic from './imgs/profile_pic.jpg';
import './level0.css';

function level() {
    const welcome = 'Welcome to 30 Days Of React';
    const title = 'Getting Started React';
    const subtitle = 'JavaScript Library';
    const author = {
        firstName: 'И^4n',
        lastName: 'UNKNOWN',
    }
    const date = '25/11/2022';

    const user = (
        <div>
            <img src={profilePic} alt='my profile pic' className='profile-pic'></img>
        </div>
    )
    const header = (
        <header>
            <div className='header-wrapper'>
                <h1>{welcome}</h1>
                {user}
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>Dev: {author.firstName} {author.lastName}</p>
                <small>{date}</small>
            </div>
        </header>
    )

    // JSX element, main

    const numOne = 3;
    const numTwo = 2;

    const result = (
        <p>
            {numOne} + {numTwo} = {numOne + numTwo}
        </p>
    );

    const yearBorn = 1234;
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearBorn;
    const personAge = (
        <p>
            {' '}
            {author.firstName} {author.lastName} is {age} years old
        </p>
    )

    const techs = ['HTML', 'CSS', 'JavaScript']
    const techsFormatted = techs.map((tech) => <li>{tech}</li>)


    const main = (
        <main>
            <div className='main-wrapper'>
                <p>Prerequisite to get started{' '}
                    <strong>
                        <em>react.js</em>
                    </strong>
                    :
                </p>
                <ul>
                    {techsFormatted}
                    {result}
                    {personAge}
                </ul>
            </div>
        </main>
    )


    const copyright = 'Copyright© 2022';
    // JSX element, footer
    const footer = (
        <footer>
            <div className='footer-wrapper'>
                <p>{copyright}</p>
            </div>
        </footer>
    );

    return (
        <div className='app'>
            {header}
            {main}
            {footer}
        </div>
    );
}

export default level;