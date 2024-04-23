import "./Limitations.css";
import Cards from "./Cards";
import gender__icon from "../../assets/icon-gender.svg";
import age__icon from "../../assets/icon-age.svg";
import muscle__icon from "../../assets/icon-muscle.svg";
import pregnancy__icon from "../../assets/icon-pregnancy.svg";
import race__icon from "../../assets/icon-race.svg";

const Limitations = () => {
  return (
    <div className="limitations container">
      <div className="element__one">
        <div className="element__limitations--text">
          <h2>Limitations of BMI</h2>
          <p>
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        <Cards
          className="card"
          image={gender__icon}
          title="Gender"
          description="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
        />
      </div>
      <div className="element__two">
        <Cards
          image={age__icon}
          title="Age"
          description="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
        />
        <Cards
          image={muscle__icon}
          title="Muscle"
          description="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
        />
      </div>
      <div className="element__three">
        <Cards
          image={pregnancy__icon}
          title="Pregnancy"
          description="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
        />
        <Cards
          image={race__icon}
          title="Race"
          description="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
        />
      </div>
    </div>
  );
};

export default Limitations;
