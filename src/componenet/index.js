import React from "react";

export default class LightDarkMode extends React.Component {
  state = {
    mode: "Light",
  };

  changeMode = (e) => {
    this.setState((prevState) => {
      return { mode: prevState.mode === "Dark" ? "Light" : "Dark" };
    });
  };

  render() {
    const { mode } = this.state;
    return (
      <div style={{ backgroundColor: mode === "Dark" ? "#00000" : "#fff" }}>
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
