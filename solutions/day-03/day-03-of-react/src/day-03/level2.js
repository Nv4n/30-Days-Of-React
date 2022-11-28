import htmlLogo from './imgs/html-logo.png';
import css3Logo from './imgs/css3-logo.png';
import jsLogo from './imgs/js-logo.png';
import reactLogo from './imgs/react-logo.png';

import './level2.css';

const imgs = [htmlLogo, css3Logo, jsLogo, reactLogo];
const logos = (
    imgs.map((img) => <img src={img} alt="logo" className='logo-img'></img>)
);



function level2() {
    return (
        <div className="App">
            <h1 className='title'>Front End Technologies</h1>
            <div className='img-wrapper'>
                {logos}
            </div>
            <form className='newsletter-form'>
                <h2 className='form-title'>Subscribe</h2>
                <p className='form-info'>Sign up with your email address to receive news and updates</p>
                <div className='inputs-wrapper'>
                    <input type="text" name="first-name" id="firstname" placeholder='First name' className='form-input' />
                    <input type="text" name="last-name" id="lastname" placeholder='Last name' className='form-input' />
                    <input type="email" name="email" id="email" placeholder='Email' className='form-input' />
                </div>
                <button className='main-btn'>Subscribe</button>
            </form>
        </div>
    );
}

export default level2;