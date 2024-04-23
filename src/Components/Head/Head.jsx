import "./Head.css";
import icon from "../../assets/logo.svg";
const Head = () => {
  return (
    <div className="head container">
      <div className="head__contenido">
        <img src={icon} alt="" className="head__icon" />
        <div className="head__text">
          <h1>Body Mass <br/> Index Calculator</h1>
          <p>
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Head;
