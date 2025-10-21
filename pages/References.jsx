import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';



function References(){
  return(
<div id="page-wrapper">
<Header/>
<div className="container">
<div className="layout">
<Nav/>
  <main style={{minHeight:"100vh"}}>
  <h2>References</h2>
<ul>
               <li>Person: Manager of LegacAI</li>
               <li>Name:Boss</li>
               </ul>

               </main>
                </div>
                </div>
                <Footer/>
                </div>
                );
              }
              export default References;


