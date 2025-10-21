import {Link} from 'react-router-dom';

function Nav(){
    return(
<nav>
<ul>
<li><Link to="/">Home</Link></li>
        <li><Link to="/education">Educations</Link></li>
            <li><Link to="/employments">Employments</Link></li>
            <li><Link to="/achievements">Achievements</Link></li>
            <li><Link to="/references">References</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            </ul>
            </nav>
);
}
export default Nav;