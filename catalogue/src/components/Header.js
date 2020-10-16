import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animationClass: "test",
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    if (this.state.animationClass === "test") {
      this.setState({
        animationClass: "test paused",
      });
    } else {
      this.setState({
        animationClass: "test",
      });
    }
  }
  render() {
    return (
      <div className={this.state.animationClass}>
        <div className="imgcontainer">
          <img
            className="logo"
            src={require("../images/milano.jpg")}
            alt={"logo"}
          />
          <img
            className="logo"
            src={require("../images/milano.jpg")}
            alt={"logo"}
          />
          <img
            className="logo"
            src={require("../images/milano.jpg")}
            alt={"logo"}
          />
        </div>
        <h1>High Quality Speakers</h1>
        <h6>Crazy Low Prices</h6>
      </div>
    );
  }
}

export default Header;
