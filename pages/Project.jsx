import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';



function Projects(){
    return(
<div id="page-wrapper">
    <Header/>
    <Nav/>
    <main style={{minHeight:"100vh"}}>
                <h2>Projects</h2>
                    <h3>Chained Hash Table</h3>
                    <p>Implemented insertion, retrieval, and deletion operations for fast and reliable data access</p>
                    <p>Added dynamic resizing based on load factor to strengthen efficiency and scalability</p>

            </main>
            <Footer/>
            </div>
     );
    };
    export default Projects;

                
               

