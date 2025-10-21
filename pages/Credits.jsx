import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

function Credits(){
    return(
<div id="page-wrapper">
<Header />
<div className="container">
    <div className="layout">
<Nav/>
             <main style={{minHeight:"100vh"}}>
                <h2>Resources</h2>
                <ul>
                    <li>Professor Lab Demo</li>
                </ul>
                </main>
                </div>
                </div>
            <Footer/>
            </div>
);
}
export default Credits;

