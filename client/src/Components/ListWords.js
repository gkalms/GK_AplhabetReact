import React from "react";

const ListWords = (props) => {
    return (
      <ul>
        {props.words.map((el, index) => (
          <li key={index} onClick={() => props.handleClick(index)}>
            name: {el.name} - alphabet: {el.alphabet}
          </li>
        ))}
      </ul>
    );
  };


export {ListWords};