import Name from './components/1Name';
import Name2 from './components/2Name';
import './App.css';

function App() {
  return (
    <div className="App">
      <Name name='Andres' phoneNumber='3234366000' />
      <Name2 name='Mauricio' phoneNumber='3234366000' />
    </div>
  );
}

export default App;
