import React, { useState } from 'react'
import PropTypes from 'prop-types'

function TextForm({ heading, styles }) {

    const [text, setText] = useState("initial Value")
    const [lines, setLines] = useState(null)
    const [numbers, setNumbers] = useState(null)

    const minuteOrSecond = (0.009 * text?.split(" ").length);

    function handleUppercaseClick() {
        let newText = text.toUpperCase();
        setText(newText)
    }

    function handleChange(event) {
        setText(event.target.value)
    }

    function handleClearText() {
        setText("")
    }

    function handleLowercaseClick() {
        let newText = text.toLowerCase()
        setText(newText)
    }

    function handleExtraSpaces() {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    const handleReverseText = () => {
        const reversedText = text.split('').reverse().join('');
        setText(reversedText)
    };

    const handleCapitalizeEachWord = () => {
        const capitalizedText = text.replace(/\b\w/g, (char) => char.toUpperCase());
        setText(capitalizedText)
    };

    const handleCountLines = () => {
        const lineCount = text.split(/\r\n|\r|\n/).filter((line) => line.trim() !== '').length;
        setLines(lineCount);

    };

    const handleExtractNumbers = () => {
        const numbersArray = text.match(/\d+/g) || [];
        setNumbers(numbersArray);
    };





    return (
        <>
            <div className='container'>
                <h2> {heading}</h2>
                <div className="mb-3">
                    <textarea
                        value={text}
                        onChange={handleChange}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={7}
                        defaultValue={""}
                    />
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUppercaseClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleClearText}>Clear Text</button>
                <button className='btn btn-primary mx-2' onClick={handleLowercaseClick}>Convert to Lowercase</button>
                <button className='btn btn-success mx-2' onClick={handleExtraSpaces}>Remove Extra spaces</button>
                <button className='btn btn-success mx-2' onClick={handleReverseText}> Reverse</button>
                <button className='btn btn-success mx-2' onClick={handleCapitalizeEachWord}> Capitalize First Letter</button>
                <button className='btn btn-success mx-2' onClick={handleCountLines}> Count Lines</button>
                <button className='btn btn-success mx-2 my-2' onClick={handleExtractNumbers}> Extract numbers</button>


            </div> <br />

            <div className='container'>
                <div className="row">
                    <div className='col-md-4'>
                        <h2> Your text Summary</h2>
                        <p> {text.split(" ").length} words and {text.length} characters </p>
                        {minuteOrSecond > 1 ? <p> {minuteOrSecond} Minutes to read</p> : <p> {minuteOrSecond * 60} Seconds to read</p>}
                    </div>

                    {(lines > 0) && <div className='col-md-4'>
                        <h3> Your text has {lines} Lines.</h3>
                    </div>}

                    <div className='col-md-4'>
                        <h3> Numbers </h3>
                        {numbers && numbers.map((item, index) => {
                        return (
                            <p style={{margin : '-4px', marginLeft : '4px'}} key={index}> {item} </p>
                        )
                    })
                   }
                    </div>


                </div>
                <br />

                <h2> Preview </h2>
                <p> {text} </p>
            </div>

        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

export default TextForm