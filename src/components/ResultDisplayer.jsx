const ResultDisplayer = (props) => {

    const {category, score, icon} = props.result
    
    return ( 
        <p className="specific-results">
            <span className="specific-area"><img src={icon} alt={category} /> {category}</span>
            <span className="specific-score">{score}<i>/ 100</i></span>
        </p>
    );
    
}
 
export default ResultDisplayer;