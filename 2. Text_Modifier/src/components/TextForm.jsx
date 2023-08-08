import { useState } from "react";

const TextForm = (props) => {
    
    const [text, setText] = useState(""); 

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    // onClick Events
    const upperCase = () =>{
        let upperCase = text.toUpperCase();
        setText(upperCase);
        props.showAlert("Converted to UpperCase", "primary");
    }
    const lowerCase = () =>{
        let lowerCase = text.toLowerCase();
        setText(lowerCase);
        props.showAlert("Converted to LowerCase", "success");
    }

    const clear = () =>{
        let clean = '';
        setText(clean);
        props.showAlert("Text Cleared", "danger");
    }

    // Text to speach
    const textToSpeech = () =>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;

        window.speechSynthesis.speak(msg);

        const toggle = document.getElementById('speakBtn')
        if( toggle.textContent == 'Text to Speech'){
            toggle.innerHTML = "Stop";
            props.showAlert("Converted to Speech", "warning");
        }
        else{
            toggle.innerHTML = "Stop";
            if(toggle.innerHTML == "Stop"){
                toggle.innerHTML = "Text to Speech";
                window.speechSynthesis.cancel();
                props.showAlert("Speech Stoped", "warning");
            }
        }
    }

    // copy to clipboard
    const copyText = ()=>{
        const userText = document.getElementById('userText');
        userText.select();
        navigator.clipboard.writeText(userText.value)
        setTimeout(() => {
            document.getSelection().removeAllRanges();
        }, 1500);
        props.showAlert("Copied to Clipboard", "dark");
    }


    const myStyle = {
        backgroundColor: 'black',
        color: 'white'
    }

    return (
        <>
            <h1 className="text-center mt-3" >{props.heading}</h1>
            <div className="form-floating">
                <textarea 
                className="form-control" value={text} id="userText"  onChange={handleOnChange}></textarea>
            </div>
            <button disabled={text.length == 0} type="submit" className="btn btn-primary" onClick={upperCase}>Uppercase</button>
            <button disabled={text.length == 0} type="submit" className="btn btn-success mx-2" onClick={lowerCase}>LowerCase</button>
            <button disabled={text.length == 0} type="submit" className="btn btn-warning text-white " onClick={textToSpeech} id="speakBtn">Text to Speech</button>
            <button disabled={text.length == 0} type="submit" className="btn btn-dark text-white mx-2" onClick={copyText} id="speakBtn">Copy to Clipboard</button>
            <button disabled={text.length == 0} type="submit" className="btn btn-danger " onClick={clear} >Clear Text</button>

            <h3 className="mt-3">Text Summary</h3>
            <p>Words <strong>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}</strong> and Characters are <strong>{text.length}</strong></p>

            <div className="container">
                <h3>Preview - Time to Read the Text <strong>{Math.round(text.split(" ").length * 0.008)} Minutes</strong></h3>
                <p>{text.length > 0 ? text : 'Nothing to Preview'}</p>
            </div>
        </>
    )
}
export default TextForm;