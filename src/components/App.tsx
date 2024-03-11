import * as React from "react";
import WeatherComponent from './WeatherComponent';
import '../styles/App.css';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>
          Приложение отслеживания прогноза погоды
        </h1>
      </header>
      <main>
        <WeatherComponent />
      </main>
      <footer className='footer'>
        <p>
          Автор: Тайсумов Р.А. 
          Март, 2024
        </p>
      </footer>
    </div>
  );
}

export default App;