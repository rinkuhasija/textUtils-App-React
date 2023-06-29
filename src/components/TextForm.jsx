import React, { useState } from 'react'
import PropTypes from 'prop-types'

function TextForm({ heading }) {

    const [text, setText] = useState("initial Value")

    const minuteOrSecond = (0.009 * text.split(" ").length) ;

    function handleUppercaseClick() {
        let newText = text.toUpperCase();
        setText(newText)
    }

    function hnadleChange(event) {
        setText(event.target.value)
    }

    function handleClearText() {
        setText("")
    }

    return (
        <>
            <div className='container'>
                <h2> {heading}</h2>
                <div className="mb-3">
                    <textarea
                        value={text}
                        onChange={hnadleChange}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={7}
                        defaultValue={""}
                    />
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUppercaseClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleClearText}>Clear Text</button>
            </div> <br />

            <div className='container'>
                <h2> Your text Summary</h2>
                <p> {text.split(" ").length} words and {text.length} characters </p>
                 { minuteOrSecond > 1  ? <p> {minuteOrSecond} Minutes to read</p> :  <p> {minuteOrSecond * 60} Seconds to read</p> }
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