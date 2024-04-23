import './Calculator.css'

const Calculator = () => {
  return (
    <div className="calculator">
      <div className="calculator__contenido">
        <h1>Enter your detatails below</h1>
        <form action="">
          <select name="system" id="system">
            <option value="metric">Metric</option>
            <option value="imperial">Metric</option>
          </select>
          <div className="values__system">
            <label>Height</label>
            <input type="number" id="height" required  placeholder="0"/>
            <p>cm</p>
            <label>Weight</label>
            <input type="number" id="height" required  placeholder="0"/>
            <p>kg</p>
          </div>
        </form>
        <div className="result__system">
            <h2>Welcome!</h2>
            <p>Enter your height and weight and you'll see yout bmi result here</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
