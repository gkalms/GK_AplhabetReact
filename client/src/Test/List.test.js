import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ListTest = (props) => {

    return (
        <div>
            <form>
                <div className="row" >
                    <Button variant="info" value="A" onClick={props.handleClick}>A</Button>
                    <Button variant="info" value="B" onClick={props.handleClick}>B</Button>
                    <Button variant="info" value="C" onClick={props.handleClick}>C</Button>
                    <Button variant="info" value="D" onClick={props.handleClick}>D</Button>
                    <Button variant="info" value="E" onClick={props.handleClick}>E</Button>
                    <Button variant="info" value="F" onClick={props.handleClick}>F</Button>
                    <Button variant="info" value="G" onClick={props.handleClick}>G</Button>
                </div>
                <div className="row">
                    <Button variant="success" onClick={props.handleClick} value="H">H</Button>
                    <Button variant="success" onClick={props.handleClick} value="I">I</Button>
                    <Button variant="success" onClick={props.handleClick} value="J">J</Button>
                    <Button variant="success" onClick={props.handleClick} value="K">K</Button>
                    <Button variant="success" onClick={props.handleClick} value="L">L</Button>
                    <Button variant="success" onClick={props.handleClick} value="M">M</Button>
                    <Button variant="success" onClick={props.handleClick} value="N">N</Button>
                </div>
                <div className="row">
                    <Button variant="warning" onClick={props.handleClick} value="O">O</Button>
                    <Button variant="warning" onClick={props.handleClick} value="P">P</Button>
                    <Button variant="warning" onClick={props.handleClick} value="Q">Q</Button>
                    <Button variant="warning" onClick={props.handleClick} value="R">R</Button>
                    <Button variant="warning" onClick={props.handleClick} value="S">S</Button>
                    <Button variant="warning" onClick={props.handleClick} value="T">T</Button>
                    <Button variant="warning" onClick={props.handleClick} value="U">U</Button>
                </div>
                <div className="row">
                    <Button variant="info" onClick={props.handleClick} value="V">V</Button>
                    <Button variant="info" onClick={props.handleClick} value="W">W</Button>
                    <Button variant="info" onClick={props.handleClick} value="X">X</Button>
                    <Button variant="info" onClick={props.handleClick} value="Y">Y</Button>
                    <Button variant="info" onClick={props.handleClick} value="Z">Z</Button>
                    <Button variant="secondary" id="clear">Clear</Button>
                    <Button variant="secondary" id="quit">Quit</Button>
                </div>
                <p>Input will go here</p>
            </form>
        </div>
    );
};