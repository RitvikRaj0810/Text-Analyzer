import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText=text.toUpperCase();
        setText(newText);
        // props.showAlert("Converted to UpperCase!","success")
    }
    const handleLoClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        // props.showAlert("Converted to LowerCase!","success")
    }
    const handleSeClick = ()=>{ 
        let newText = text.toLowerCase();
        newText = newText[0].toUpperCase() + newText.slice(1);
        setText(newText)
        // props.showAlert("Converted to Sentense case!", "success");
    }
    const handleCaClick = ()=>{ 
        let newText = text.toLowerCase();
        const arr = newText.split(" ");

        for( let i=0 ; i<arr.length; i++){
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }

        newText = arr.join(" ");

        setText(newText)
    const handleCLearText = ()=>{
        let newText='';
        setText(newText);
        // props.showAlert("Cleared text!","success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        // props.showAlert("Copied to Clipboard!","success")

    }
    const handleExtraSpaces = ()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        // props.showAlert("Removed Extra Spaces!","success")
    }
    const handleDownload = () => {
        // file object
        const file = new Blob([text], { type: "text/plain" });
    
        // anchor link
        const element = document.createElement("a");
        element.href = URL.createObjectURL(file);
        element.download = "TextAnalyzer-" + Date.now() + ".txt";
    
        // simulate link click
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
      };
    const [text,setText]=useState('');
  return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white': '#042743'}}>
            <h1 className='mb-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e': 'white',color:props.mode==='dark'?'white': '#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSeClick}>Convert to Sentence Case </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCaClick}>Convert to Capitalized Case </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCLearText}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleDownload}>Download File</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white': '#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Nothing to preview....'}</p>
        </div>
    </>
  )
}
