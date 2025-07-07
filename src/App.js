
import './App.css';

function App() {
  return (
    <div className="App">
    <header>
      <div>
        <h2>Баланс+</h2>
      </div>
    </header>

    <main>
      <div>

        <div className='dohod'>
          <h2>Ваши доходы:</h2>
          <input type='text'/>
        </div>

        <div className='rashod'>
          <h2>Ваши расходы:</h2>
          <input type='text'/>
        </div>
      </div>
    </main>
    </div>
  );
}

export default App;
