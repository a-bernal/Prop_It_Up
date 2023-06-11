import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
      firstName={"Albert"} 
      lastName={"Bernal"}
      age={35}
      hairColor={"black"}
      />
      <PersonCard 
      firstName={"Jennifer"} 
      lastName={"Bernal"}
      age={34}
      hairColor={"brown"}
      />
      <PersonCard 
      firstName={"Samantha"} 
      lastName={"Bernal"}
      age={2}
      hairColor={"black"}
      />
      <PersonCard 
      firstName={"Percy"} 
      lastName={"Bernal"}
      age={5}
      hairColor={"white/grey"}
      />
    </div>
  );
}

export default App;
