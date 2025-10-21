import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';


function Contact(){
    return(
<div id="page-wrapper">
<Header/>
<div className="container">
    <div className="layout">
        <Nav/>
         <main style={{minHeight:"100vh"}}>
                <h2>Email:</h2>
                <p>sarahl@bu.edu</p>
                </main>
                </div>
                </div>
                <Footer/>
                 </div>
        );
    }

            export default Contact;
