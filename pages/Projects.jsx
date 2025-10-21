import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import React, {useState} from 'react';



function Calculator(){
    const[one,SetO]=useState('');
    const[two,Set1]=useState('');
    const[result,SetR]=useState('');


    function handleone(e){
        SetO(e.target.value);
    }

    function handletwo(e){
        Set1(e.target.value)
    }

    function doadd(){
        SetR(Number(one)+(Number(two)));
    }
    function dosubtract(){
        SetR(Number(one)-(Number(two)));
    }

     function domultiply(){
        SetR(Number(one)*(Number(two)));
    }

    function dodivide(){
        SetR(Number(one)/(Number(two)));
    }
     function dopower(){
        SetR(Math.pow(Number(one),Number(two)));
    }

    function doclear(){
        SetO('');
         Set1('');
          SetR('');
    }

    
    return(
<div>
    <Header/>
    <Nav/>
    <main>

                    <h2>Calculator</h2>
                    <div>
                    <label htmlFor="one">First number:</label>
                     <input id="one" placeholder="First-number" value={one} onChange={handleone}/>
</div>
<div>
                    <label htmlFor="two">Second number:</label>
                      <input id="two" placeholder="Second-number" value={two} onChange={handletwo}/>
                </div>
                <div>
                <button onClick={doadd}>+</button>
                <button onClick={dosubtract}>-</button>
                <button onClick={domultiply}>*</button>
                <button onClick={dodivide}>/</button>
                 <button onClick={dopower}>**</button>
                <button onClick={doclear}>Clear</button>
                </div>
                <h3>Result:{result}</h3>
                </main>

                <Footer/>
                </div>
                    );
                }

                export default Calculator;



