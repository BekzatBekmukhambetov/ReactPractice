const messages = [
  "Desc-1",
  "Desc-2",
  "Desc-3",
];

export default function App(){
  const step = 2;
return(
  <div className="steps">
    <div className="numbers">
      <div className= {`${step >= 1 ? "active": " "}`}>1</div>
      <div className= {`${step >= 2 ? "active": " "}`}>2</div>
      <div className= {`${step >= 3 ? "active": " "}`}>3</div>
    </div>

    <p className="message">Flashcard {step} {messages[step-1]} </p>

    <div className="buttons">
      <button style= {{backgroundColor: "#7950f2"}}>Prev</button>
      <button style= {{backgroundColor: "#7950f2"}}>Next</button>
    </div>
  </div>
);
}