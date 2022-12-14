import React, { useState } from "react";
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';

type ResultsStateType = {
  contry: string,
  cityName: string,
  temperature: string,
  conditionText: string,
  icon: string
};

function App() {
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultsStateType>({
    contry: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  });
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      fetch(`https://api.weatherapi.com/v1/current.json?key=bb00afd8b8b646c4a52130401221209&q=${city}&aqi=no`)
      .then(res => res.json())
      .then(data => {
        setResults({
          contry: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon
        })
        setCity("");
      })
      .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"));
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form city={city} setCity={setCity} getWeather={getWeather}/>
        <Results results={results}/>
      </div>
    </div>
  );
}

export default App;
