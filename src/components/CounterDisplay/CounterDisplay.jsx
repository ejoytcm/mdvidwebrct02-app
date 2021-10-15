import React from "react";

class CounterDisplay extends React.Component {

  state = {
    localCounter: 0
  }
  timer;

  constructor() {
    super();
    console.log("[CounterDisplay] - constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("[CounterDisplay] - getDerivedStateFromProps");
    return {
      localCounter: nextProps.counter * 2
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[CounterDisplay] - shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[CounterDisplay] - getSnapshotBeforeUpdate");
    return "data before update";
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[CounterDisplay] - componentDidUpdate");
    console.log(snapshot);
  }

  componentDidMount() {
    console.log("[CounterDisplay] - componentDidMount");
    // this.timer = setInterval(() => console.log(new Date()), 1000);
  }

  componentWillUnmount() {
    if(this.timer) clearInterval(this.timer)
    console.log("[CounterDisplay] - componentWillUnmount");
  }

  render() {
    console.log("[CounterDisplay] - render");

    return (
      <React.Fragment>
        <h6 className="mb-2 text-muted" id="h-id">Props counter: {this.props.counter}</h6>
        <h6 className="mb-2 text-muted">Local counter: {this.state.localCounter}</h6>
      </React.Fragment>
    );
  }
}

export default CounterDisplay;
