import { useState } from "react";

const CheckoutStepper = ({ checoutSteps = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  if (!checoutSteps.length) {
    return <></>;
  }


//   const stepRef = u

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === checoutSteps.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

//   const calculateProgressBar = () => {
//     return ((currentStep-1)/(checoutSteps.length-1))*100;
//   };
const calculateProgressBar = () => {
  // Calculate the width of the progress bar as a percentage
  // The width should fully extend to the current step
  const stepWidth = 100 / (checoutSteps.length - 1);
  return stepWidth * (currentStep - 1);
};

  const ActiveComponent = checoutSteps[currentStep - 1]?.Component;
  return (
    <>
      <div className="stepper">
        {checoutSteps.map((step, index) => {
          return (
            <div
              key={step.name}
              className={`step ${
                currentStep > index + 1 || isComplete ? "complete" : ""
              } ${currentStep === index + 1 ? "active " : ""}`}
            >
              <div className="step-number">
                {currentStep > index + 1 || isComplete ? (
                  <span>✔</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="step-name">{step.name}</div>
            </div>
          );
        })}

        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${calculateProgressBar()}%` }}
          ></div>
        </div>
      </div>
      <ActiveComponent />
      {!isComplete && (
        <button className="btn" onClick={handleNext}>
          {currentStep === checoutSteps.length ? "Finsih" : "Next"}
        </button>
      )}
    </>
  );
};

export default CheckoutStepper;
