import './App.css';

function App() {
  const handleClick = async () =>{
      await fetch('http://localhost:4000');
      console.log('request done');
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;