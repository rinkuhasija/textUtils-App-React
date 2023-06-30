import PropTypes from 'prop-types'
import { useState } from 'react'

function Navbar({ title, initialStyle, setStyles }) {

    const [btnText, setBtnText] = useState("Enable Dark mode");
    
    function toggleStyleChange() {
        if (initialStyle.color === 'black' ) {
            setStyles({
                color: "white",
                backgroundColor:"#2b3035",
                border : '1px solid white',
                padding : '20px'
            })
            setBtnText("Enable Light Mode")
        } else {
            setStyles({
                color:'black',
                backgroundColor :"white",
                });
                setBtnText('Enable dark mode')
        }
    }   

    return (
        <div><nav className="navbar bg-dark border-bottom border-bottom-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    {title}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </li>
                    </ul>
                </div>
                <button onClick={toggleStyleChange}  className='btn btn-success'> {btnText} </button>
            </div>
        </nav></div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Navbar