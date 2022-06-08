import React, { useEffect, useState } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';

import Planets from "./components/planets/Planets"
import { Planet } from './components/planets/Planets.types';

function App() {
  // change any into a nice interface for Planet
  const [planets, setPlanets] = useState<Planet[]|null>(null)
  const [error, setError] = useState<Error | undefined>()

    const planetApiResponse = useFetch('api/planets/')
    useEffect(() => {
      const data = planetApiResponse.data as Record<string, any>;
      console.log(data)
      if(data && data.hasOwnProperty("results")){
        const results: Planet[] = data.results
        setPlanets(results)
      }
      else if (planetApiResponse.error){
        setError(planetApiResponse.error)
      }
      
      
      
    }, [])
  return (
    <div className="App">
      {planets && <Planets planets={planets} />}
      {!planets && <div>loading</div>}
      {error && <div>error</div>}
    </div>
  );
}

export default App;
