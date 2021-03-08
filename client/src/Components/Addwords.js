import React, { useState } from 'react';

const AddWords = (props) => {

  const [FormState, setFormState] = useState({
    word: "",
    letter: ""
  })

  const handleChange = (e) => {

    const newState = { ...FormState }
    newState[e.target.name] = e.target.value;
    setFormState(newState);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit(FormState.word, FormState.letter);
  }

  return (
    <div>
      <h2>Add word</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Letter
        <input name="letter" value={FormState.alphabetName} onChange={handleChange}></input>
        </label>
        <label>
          Word
        <input name="word" value={FormState.name} onChange={handleChange}></input>
        </label>
        <button type="submit">
          Submit
      </button>
      </form>
    </div>
  );
};

export { AddWords }