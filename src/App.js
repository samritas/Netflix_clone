import Banner from "./componnet/Banner";
import Row from "./componnet/Row";
import requests from "./request";
import React, { useState, useEffect } from 'react';
import LoadingScreen from "./componnet/loadingScreen";
import './App.css'
import Nav from "./componnet/Nav";
function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])
  return (
   <div className="app">
    {loading && <LoadingScreen />}
   
   <Banner/>
   <Row title="NETFLIX ORGINALS" fetchUrl={requests.fetchNtflixOrgnal} isLargeRow/>
   <Row title="Trending now " fetchUrl={requests.fetchTranding}/>
   <Row title="Top Rated Movie" fetchUrl={requests.fetchTopRateMovies}/>
   <Row title="Action Movie " fetchUrl={requests. fetchActionMovie}/>
   <Row title="Comedy Movie " fetchUrl={requests.fetchComedyMovie}/>
   <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovie}/>
   <Row title="Romance Movie" fetchUrl={requests. fetchRomanceMovie}/>
   <Row title="Documentary Movie" fetchUrl={requests.fetchDocumentaryMovie}/>
   </div>
  );
}

export default App;
