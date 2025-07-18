import { useSelector, useDispatch } from 'react-redux';
import './App.css';


function App() {
  const result = useSelector(state => state.result);
  const dispatch = useDispatch();

  const calculateResult = () => {
    const dohodInput = document.querySelector('.input_dohod');
    const rashodInput = document.querySelector('.input_rashod');
    
    const dohod = parseFloat(dohodInput.value) || 0;
    const rashod = parseFloat(rashodInput.value) || 0;
    
    dispatch({ 
      type: "CALCULATE_RESULT", 
      payload: dohod - rashod 
    });
  };

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
            <h2>Ваши доходы в месяц:</h2>
            <input className='input_dohod' type='number' placeholder='0' />
          </div>

          <div className='rashod'>
            <h2>Ваши расходы в месяц:</h2>
            <input className='input_rashod' type='number' placeholder='0' />
          </div>

            <button className='btn' onClick={calculateResult}>Рассчитать</button>

          <div className='result'>
            <h2>Ваш остаток: {result}</h2>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;