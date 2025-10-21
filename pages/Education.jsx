import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';


function Education(){
    return(
<div id="page-wrapper">
<Header/>
<div className="container">
<div className="layout">
<Nav/>
            <main style={{minHeight:"100vh"}}>
            <h1>Education</h1>
                <h2>Boston University</h2>
                <p>B.A. in Computer Science</p>
                <ul>
                    <li>Relevant coursework: Discrete Mathematics, Software Engineering</li>
                </ul>
                </main>
                </div>
                </div>
            <Footer/>
            </div>
);
}
export default Education;


         

