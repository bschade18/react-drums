import React from "react";
import "./App.css";

const drumPad = {
  fontSize: 25,
  padding: 15,
  borderRadius: 5,
  height: 75,
  width: 90
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ""
    };
    this.handleClickQ = this.handleClickQ.bind(this);
    this.handleClickW = this.handleClickW.bind(this);
    this.handleClickE = this.handleClickE.bind(this);
    this.handleClickA = this.handleClickA.bind(this);
    this.handleClickS = this.handleClickS.bind(this);
    this.handleClickD = this.handleClickD.bind(this);
    this.handleClickZ = this.handleClickZ.bind(this);
    this.handleClickX = this.handleClickX.bind(this);
    this.handleClickC = this.handleClickC.bind(this);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleClickQ() {
    const qSound = document.getElementById("Q");
    qSound.play();
    this.setState({
      display: "Do"
    });
  }
  handleClickW() {
    const qSound = document.getElementById("W");
    qSound.play();
    this.setState({
      display: "Re"
    });
  }
  handleClickE() {
    const qSound = document.getElementById("E");
    qSound.play();
    this.setState({
      display: "Mi"
    });
  }
  handleClickA() {
    const qSound = document.getElementById("A");
    qSound.play();
    this.setState({
      display: "Funk"
    });
  }
  handleClickS() {
    const qSound = document.getElementById("S");
    qSound.play();
    this.setState({
      display: "Clap"
    });
  }
  handleClickD() {
    const qSound = document.getElementById("D");
    qSound.play();
    this.setState({
      display: "Cymbal"
    });
  }
  handleClickZ() {
    const qSound = document.getElementById("Z");
    qSound.play();
    this.setState({
      display: "Drop It"
    });
  }
  handleClickX() {
    const qSound = document.getElementById("X");
    qSound.play();
    this.setState({
      display: "Smooth"
    });
  }
  handleClickC() {
    const qSound = document.getElementById("C");
    qSound.play();
    this.setState({
      display: "Fly"
    });
  }
  handleKeyPress(event) {
    if (event.keyCode === 81) {
      this.handleClickQ();
    } else if (event.keyCode === 87) {
      this.handleClickW();
    } else if (event.keyCode === 69) {
      this.handleClickE();
    } else if (event.keyCode === 65) {
      this.handleClickA();
    } else if (event.keyCode === 83) {
      this.handleClickS();
    } else if (event.keyCode === 68) {
      this.handleClickD();
    } else if (event.keyCode === 90) {
      this.handleClickZ();
    } else if (event.keyCode === 88) {
      this.handleClickX();
    } else if (event.keyCode === 67) {
      this.handleClickC();
    }
  }

  render() {
    return (
      <div id="container">
        <div id="drum-machine">
          <button
            id="Qpad"
            className="drum-pad"
            onClick={this.handleClickQ}
            style={drumPad}
          >
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
              className="clip"
              id="Q"
            />
            Q
          </button>
          <button
            id="Wpad"
            className="drum-pad"
            onClick={this.handleClickW}
            style={drumPad}
          >
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
              className="clip"
              id="W"
            />
            W
          </button>
          <button
            id="Epad"
            className="drum-pad"
            onClick={this.handleClickE}
            style={drumPad}
          >
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
              className="clip"
              id="E"
            />
            E
          </button>
          <button
            id="Apad"
            className="drum-pad"
            onClick={this.handleClickA}
            style={drumPad}
          >
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              className="clip"
              id="A"
            />
            A
          </button>
          <button
            id="Spad"
            className="drum-pad"
            onClick={this.handleClickS}
            style={drumPad}
          >
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              className="clip"
              id="S"
            />
            S
          </button>
          <button
            id="Dpad"
            className="drum-pad"
            onClick={this.handleClickD}
            style={drumPad}
          >
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              className="clip"
              id="D"
            />
            D
          </button>
          <button
            id="Zpad"
            className="drum-pad"
            onClick={this.handleClickZ}
            style={drumPad}
          >
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              className="clip"
              id="Z"
            />
            Z
          </button>
          <button
            id="Xpad"
            className="drum-pad"
            onClick={this.handleClickX}
            style={drumPad}
          >
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              className="clip"
              id="X"
            />
            X
          </button>
          <button
            id="Cpad"
            className="drum-pad"
            onClick={this.handleClickC}
            style={drumPad}
          >
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              className="clip"
              id="C"
            />
            C
          </button>
          <div id="display-container">
            <div id="display">{this.state.display}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
