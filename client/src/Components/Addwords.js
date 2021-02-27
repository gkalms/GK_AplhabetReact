import React, { useState } from 'react';

const AddWords = (props) => {

  const [FormState, setFormState] = useState({
    name: "",
    alphabet: ""
  })

  const handleChange = (e) => {
    
    const newState = { ...FormState }
    newState[e.target.name] = e.target.value;
    setFormState(newState);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit(FormState.name, FormState.alphabet);
  }

  return (
    <div>
      <h2>Add word</h2>
      <form onSubmit={handleSubmit}>

        <label>
          Name
        <input name="name" value={FormState.name} onChange={handleChange}></input>
        </label>

        <label>
          Alphabet
        <input name="alphabet" value={FormState.alphabet} onChange={handleChange}></input>
        </label>

        <button type="submit">
          Submit word
      </button>
      </form>
    </div>
  );
};

export { AddWords }