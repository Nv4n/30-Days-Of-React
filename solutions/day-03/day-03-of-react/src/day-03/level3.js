import profilePic from './imgs/profile_pic.jpg';
import './level3.css';

const user = {
    firstName: 'И^4n',
    lastName: 'UNKNOWN',
};

const role = 'Studying Developer';
const country = 'Country';
const skillSet = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Flask', 'Django', 'NumPy', 'Pands', 'Data Analysis', 'MySQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'];

const skills = (
    skillSet.map((skill) => <li key={skill} className='skill-label'>{skill}</li>)
);

const date = new Date().toDateString("Mar 25 2015");

const Level3 = () => {
    return (
        <div className='App'>
            <div className='app-container'>
                <img src={profilePic} alt="profile" className="profile-pic" />
                <div className='label-wrapper'>
                    <span className='upper-case label'>{user.firstName} {user.lastName}</span>
                    <span className='status-label'>✔</span>
                </div>
                <span className='role-label'>{role}, {country}</span>
                <h2 className="upper-case label label-wrapper">Skills</h2>
                <ul className='skill-container'>{skills}</ul>
                <span className='time'>Joined on {date}</span>
            </div>
        </div>
    )
}

export default Level3