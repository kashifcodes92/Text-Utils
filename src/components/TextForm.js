import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    function totitleCase(value) {
        let myValue = value.toLowerCase()
        let newValue = myValue.split(" ")
        let newarray = []
        for(let i = 0; i< newValue.length; i++){
            let arrayValue = newValue[i][0].toUpperCase() + newValue[i].slice(1)
            newarray.push(arrayValue)
    }
        return newarray.join(" ")
    }

    const handleCap = () => {
        let newText = totitleCase(text)
        setText(newText)
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
        
    }
    const handleClrClick = ()=>{
        setText('');
    }
    const speak = () => {
                let msg = new SpeechSynthesisUtterance();
                msg.text = text;
                window.speechSynthesis.speak(msg);
    }
    // Function to count Vowels:
    const handleVoClick = () => {
    for (count = 0; count <= text.length; count++) {
      if (text.charAt(count).match(/[aeiouAEIOU]/)) {
        countChar++;
        setCount (countChar);
      }
    }
    }
    



    let [count, setCount] = useState(0);
    let countChar = 0,
    countCons = 0;
    const [text, setText] = useState('');
    //text = "new text";//Wrong way to change the state
    //setText("new text");//Right way to change the state
    return (
    <>
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary  btn-outline-dark mx-2 " onClick={handleUpClick}>Uppercase</button>
            <button className="btn btn-primary  btn-outline-dark mx-2" onClick={handleLowClick}>Lowercase</button>
            <button className="btn btn-primary btn-outline-dark mx-2" onClick={handleCap}>TitleCase</button>
            <button className="btn btn-warning btn-outline-dark mx-2" onClick={speak}>Speak</button>
            <button className="btn btn-warning btn-outline-dark mx-2" onClick={handleVoClick}>Count no. of Vowels</button>
            <button className="btn btn-danger  btn-outline-dark mx-2" onClick={handleClrClick}>Clear Text</button>

            <h3>You have entered:</h3>
            <p>{count} No. of Vowels</p>
        </div>
        <div className="container my-4">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>


    </>
  )
}
