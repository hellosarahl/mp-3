import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';


function Skills(){
    
return(
    <div id="page-wrapper">
        <Header/>
        <Nav/>

             <main style={{minHeight:"100vh"}}>
                <h2>Skills</h2>
                    <ul>
                        <li>Programming: Python, Java, C,SQL</li>
                        <li>Tools: Visual Studio Code, Spyder, Git/GitHub</li>
                    </ul>
                </main>
                <Footer/>
        
                </div>
);
}
export default Skills;
                

