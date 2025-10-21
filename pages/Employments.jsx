import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';



function Employments(){
  return(
<div id="page-wrapper">
<Header/>
<div className="container">
<div className="layout">
  <Nav/>

      <main style={{minHeight:"100vh"}}>
        <h1>Employment</h1>
               <h2>LegacAI</h2>
               <p>Web Development intern, Summer 2025</p>
               <ul>
                <li>Enhanced key frontend features, boosting user engagement</li>
                <li>Directed the interface redesign to improve user satisfaction</li>
                 <li>Utilize JavaScript and help make faster development decisions</li>
               </ul>
  </main>

                </div>
                </div>
                <Footer/>
                </div>
               );
              }
                export default Employments;
