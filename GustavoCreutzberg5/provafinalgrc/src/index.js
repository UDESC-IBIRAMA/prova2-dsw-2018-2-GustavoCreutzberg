import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Relogio(props) {
    return (
        <div>
            {props.horario.toLocaleTimeString()}
        </div>
    );
}

function tick() {
    ReactDOM.render(
        <Relogio horario={new Date()} />,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);

ReactDOM.render(
    <Relogio />
    document.getElementById('root')
	);