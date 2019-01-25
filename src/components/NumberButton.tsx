import * as React from "react";

interface NumberButtonProps {
  valueChange: (value: number) => void;
  value: number;
  step: number;
  mode: NumberButtonMode;
}

export const NumberButton: React.StatelessComponent<
  NumberButtonProps
> = props => {
  const { valueChange, value, step, mode } = props;
  const { update, symbol } = numberButtonModeConfiguration[mode];

  return (
    <button onClick={() => valueChange(update(value, step))}>
      {symbol}
      {step}
    </button>
  );
};

export enum NumberButtonMode {
  increment = "increment",
  decrement = "decrement"
}

const numberButtonModeConfiguration = {
  [NumberButtonMode.increment]: {
    update: (value: number, step: number) => value + step,
    symbol: "+"
  },
  [NumberButtonMode.decrement]: {
    update: (value: number, step: number) => value - step,
    symbol: "-"
  }
};
