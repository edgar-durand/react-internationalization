import logo from './logo.svg';
import './App.css';
import {_Language} from "./asset/internationalization";
import React, {useState} from "react";

function App() {
    const [state, setState] = useState({load: true});
    const styles = {
        linksContainer: {
            display: 'flex',
            flexDirection: 'row',
            position: 'absolute',
            top: 0
        },
        links: {
            flex: 1,
            color: 'white',
            margin: '10px',
            fontSize: '30px'

        },
        load: {
            marginTop: "50%",
            textAlign: "center",
            fontSize: "40px",
            color: "white"
        }
    };
    const handleClick = (event, lng) => {
        event.preventDefault();
        if (sessionStorage.getItem('lang') !== lng) {
            sessionStorage.setItem('lang', lng);
            setState({load: true});
            // getLanguage().then(() => setState({load: true}));
        }
    };

    // !state.load && getLanguage().then(() => setState({load: true}));
    if (state.load)
        return (
            <div className="App">
                <header className="App-header">
                    <div style={styles.linksContainer}>
                        <a
                            onClick={event => handleClick(event, 'es-ES')}
                            href="ES"
                            style={styles.links}
                        >
                            {_Language('lngBTN.btnES')}
                        </a>
                        <a
                            onClick={event => handleClick(event, 'en-US')}
                            href="EN"
                            style={styles.links}
                        >
                            {_Language('lngBTN.btnEN')}
                        </a>
                    </div>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        {_Language('smallTxt', 'number:1234')}
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {_Language('react')}
                    </a>
                </header>
            </div>
        );
    return <div style={styles.load}>{sessionStorage.getItem('load') ? sessionStorage.getItem('load') : "Loading"}</div>

}

export default App;
