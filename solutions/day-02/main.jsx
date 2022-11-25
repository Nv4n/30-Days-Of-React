const rootElement = document.querySelector('.root');

const firstName = 'FName';
const lastName = 'LName';
const fullName = firstName + ' ' + lastName;

const country = 'CON';
const gender = 'm';
const email = 'example@example.email';
const phone = '08x xxx xxxx';

const userInfo = (
    <div className="userInfo">
        <p>Country: {country}</p>
        <p>Gender: {gender}</p><p> Email: {email}</p>
        <p>Phone: {phone}</p>
    </div>
);
const main = (
    <main className="main">
        <h1 className="name">{fullName}</h1>
        {userInfo}
    </main>
);

const footer = (
    <footer className="footer">
        <span>Copyright ©</span>
    </footer>
)
const app = (
    <div className="app">
        {main}
        {footer}
    </div>
);

ReactDOM.render(app, rootElement);