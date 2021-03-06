import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class Letsplay extends React.Component {

    // Get the letter
    onSubmit(value) {
        console.log(value);
}
//     // Fetch words from database matching the letter
//     const getWords = (words) => {
//       fetch(`http://localhost:9000/api/alphabet/words/${input}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(words),
//       })
//       .then((response) => {
//       console.log('GET response:', response);
//     })
//   }
//     const randomWords = getwords
//     const randomIndex = Math.floor(Math.random() * Math.floor(randomWords.length));
//     const randomWord = randomWords[randomIndex];
//     console.log(`${randomWord} `);
// }
// Render the UI
render() {
return (
  <div>
    <form>
      <h1>Alphabet</h1>
      <div id="alphabox">
        <div className="row">
          <Button variant="info" value="A" onSubmit={this.onSubmit}>A</Button>
          <Button variant="info" value="B" onSubmit={this.onSubmit}>B</Button>
          {/* <Button variant="info" value="C">C</Button>
          <Button variant="info" value="D">D</Button>
          <Button variant="info" value="E">E</Button>
          <Button variant="info" value="F">F</Button>
          <Button variant="info" value="G">G</Button> */}
        </div>
        {/* <div className="row">
          <Button variant="success" value="H">H</Button>
          <Button variant="success" value="I">I</Button>
          <Button variant="success" value="J">J</Button>
          <Button variant="success" value="K">K</Button>
          <Button variant="success" value="L">L</Button>
          <Button variant="success" value="M">M</Button>
          <Button variant="success" value="N">N</Button>
        </div>
        <div className="row">
          <Button variant="warning" value="O">O</Button>
          <Button variant="warning" value="P">P</Button>
          <Button variant="warning" value="Q">Q</Button>
          <Button variant="warning" value="R">R</Button>
          <Button variant="warning" value="S">S</Button>
          <Button variant="warning" value="T">T</Button>
          <Button variant="warning" value="U">U</Button>
        </div>
        <div className="row">
          <Button variant="danger" value="V">V</Button>
          <Button variant="danger" value="W">W</Button>
          <Button variant="danger" value="X">X</Button>
          <Button variant="danger" value="Y">Y</Button>
          <Button variant="danger" value="Z">Z</Button>
          <Button variant="secondary" id="clear">Clear</Button>
          <Button variant="secondary" id="quit">Quit</Button>
        </div> */}
      </div>
    </form>
  </div>

);
  }
}

export { Letsplay }