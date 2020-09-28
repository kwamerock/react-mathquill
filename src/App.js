import React, {useState} from 'react'
import { addStyles, EditableMathField, MathField  } from 'react-mathquill'


addStyles();

function App(props) {
  const [latex, setLatex] = useState("");
  const [mathfieldInput, setMathfieldInput] = useState([]);
  // let mathfieldInput = [];
  const injectMathFunction = (latexString) => {
      // setLatex((latex) => latex + latexString);
      mathfieldInput.write(latexString);
  };

  const initmathInput = (mathField) => {
    // mathfieldInput = mathField;
    setMathfieldInput(mathField);
    console.log('mathquillDidMount');
    console.log('mathfieldInput', mathfieldInput);
  }
  
  return (
    <div style={{marginTop: 50, marginLeft: 30}}>
      <EditableMathField
        mathquillDidMount={initmathInput}
        latex={latex} // latex value for the input field
        onChange={(mathField) => {
          setLatex(mathfieldInput.latex());
        }}
      />
      <button onClick={() => injectMathFunction("\\sqrt{}")}>√</button>
      <button onClick={() => injectMathFunction("\\cos")}>cos</button>
      <p>{latex}</p>
      {/* <button onClick={() => injectMathFunction("\\frac{}{}")}>/</button> */}

    </div>
  );
}
export default App;