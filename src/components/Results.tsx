type ResultsPropsType ={
    results: {
        contry: string,
        cityName: string,
        temperature: string,
        conditionText: string,
        icon: string
    }
}

const Results = ({results}: ResultsPropsType) => {
    const {contry, cityName, temperature, conditionText, icon} = results;
    return (
        <>
            {contry && <div className="results-country">{contry}</div>}
            {cityName && <div className="results-city">{cityName}</div>}
            {temperature && <div className="results-temp">{temperature}<span>℃</span></div>}
            {conditionText && <div className="results-condition">
                <img src={icon} alt="icon" />
                <span>{conditionText}</span>
                </div>}
        </>
    );
};

export default Results;