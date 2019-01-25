import * as React from "react";
import { NumberButton, NumberButtonMode } from "./NumberButton";
import { NumberDisplay } from "./NumberDisplay";

interface CounterState {
  value: number;
}

export class Counter extends React.Component<{}, CounterState> {
  state = {
    value: 0
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <NumberButton
          value={value}
          valueChange={this.setValue}
          mode={NumberButtonMode.decrement}
          step={1}
        />
        <NumberDisplay value={value} />
        <NumberButton
          value={value}
          valueChange={this.setValue}
          mode={NumberButtonMode.increment}
          step={1}
        />
      </div>
    );
  }

  // This has to be an arrow function, so we don't have to bind 'this'
  private setValue = (value: number) => this.setState({ value });
}
