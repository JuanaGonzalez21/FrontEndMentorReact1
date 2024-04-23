import './Calculator.css'

const Calculator = () => {
  return (
    <div className="calculator">
      <div className='calculator__container'>
        <div className="calculator__contenido">
          <h2>Enter your detatails below</h2>
          <form action="">
            <div className="calculator__options">
              <span>
                <input type='radio' name='metric' value="1" /><label> Metric</label>
              </span>
              <span>
                <input type='radio' name='imperial' value="2" /><label> Imperial</label>
              </span>
            </div>
            <div className="values__system">
              <span>
                <label>Height</label>
                <input type="number" id="height" required placeholder="0" />
                <p>cm</p>
              </span>
              <span>
                <label>Weight</label>
                <input type="number" id="height" required placeholder="0" />
                <p>kg</p>
              </span>
            </div>
          </form>
          <div className="result__system">
            <h3>Welcome!</h3>
            <p>Enter your height and weight and you'll see yout bmi result here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
