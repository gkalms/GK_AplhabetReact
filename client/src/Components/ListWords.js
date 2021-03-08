import React from "react";

const ListWords = (props) => {
    return (
      <ul>
        {props.words.map((el, index) => (
          <li key={index} onClick={() => props.handleClick(index)}>
            Letter: {el.alphabetName} - Word: {el.name}
          </li>
        ))}
      </ul>
    );
  };


export {ListWords};