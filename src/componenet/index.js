import React from "react";

export default class LightDarkMode extends React.Component {
  state = {
<<<<<<< HEAD
    mode: "Dark",
=======
    mode: "Light",
>>>>>>> 647fd9407b5b2ed658ebc788f00677f28146feed
  };

  changeMode = (e) => {
    this.setState((prevState) => {
      return { mode: prevState.mode === "Dark" ? "Light" : "Dark" };
    });
  };

  render() {
    const { mode } = this.state;
    return (
<<<<<<< HEAD
      <div style={{ backgroundColor: mode === "Dark" ? "#00000" : "#fff" }}>
=======
      <div style={{ backgroundColor: mode === "Dark" ? "#000" : "#fff" }}>
>>>>>>> 647fd9407b5b2ed658ebc788f00677f28146feed
        <h1 style={{ color: mode === "Dark" ? "#fff" : "#000" }}>
          change to {mode} Mode
        </h1>
        <button
          style={{ border: "2px solid black", borderRadius: "8px" }}
          onClick={this.changeMode}
        >
          {mode} Mode
        </button>
      </div>
    );
  }
}
