import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ListTest = (props) => {

        return (
            <div >
                <Button variant="info" value="A" onClick={props.handleClick}>A</Button>
                <Button variant="info" value="B" onClick={props.handleClick}>B</Button>
                <Button variant="info" value="C" onClick={props.handleClick}>C</Button>
                <Button variant="info" value="D" onClick={props.handleClick}>E</Button>
                <Button variant="info" value="E" onClick={props.handleClick}>A</Button>
            </div>
        );
};