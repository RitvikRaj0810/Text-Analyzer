import React from 'react'

export default function About(props) {
    let myStyle={
        color:props.mode==='dark'?'white':'#042743',
                backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
                border: '1px solid',
    }


  return (
    <div className="container" >
        <h1 className="my-3" style={{color:props.mode==='dark'?'white':'#042743'}} >About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Text  analyser gives you a way to analyze your text quickly and efficiently. Be it word count,character count, case conversion or removal of spaces.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                Well, with our Text Analyzer tool, this has never been easier. All you need to do is paste your text into the toolbox, and it will analyze the text for you. 
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                Text analyser software works in any web browsers such as chrome, firefox, Internet explorer, opera.
                    It suits to count characters in facebook,,blog,books,excel document, pdf document,essays etc.                </div>
                </div>
            </div>
        </div>
        </div>
  )
}
