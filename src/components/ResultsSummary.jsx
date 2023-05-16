import { useEffect, useState } from 'react';
import './ResultsSummary.css'

import ResultDisplayer from './ResultDisplayer'

const Resultsummary = () => {

    const [data, setData] = useState(null)

    useEffect(()=>{
        
        fetch('./data/data.json')
        .then( res => res.json() )
        .then( res =>{

            setData(res) 
            console.log(res) 
        })

    }, [])

    
    
    return ( 
        <div className="summary-container">

            <div className="general-result">
                
                <h3 className="general-title">Your Result</h3>
                
                <div className="general-score">
                    <h1 className="score">76</h1>
                    <span className="total">of 100</span>
                </div>

                <h2 className="general-evaluation">Great</h2>
                <p className="general-text">You scored higher tan 65% of the people who have taken thete tests.</p>

            </div>

            <div className="specific-result">
                
                <h3 className="specific-title">Summary</h3>

                {data  && data.map( (result, index) => <ResultDisplayer result={result} key={index} />)}
                
                
                <button id="summary-btn">Continue</button>


            </div>


        </div>
     );
}
 
export default Resultsummary;