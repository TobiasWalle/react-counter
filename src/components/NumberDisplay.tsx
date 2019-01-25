import * as React from "react";

export interface NumberDisplayProps {
  value: number;
}

export const NumberDisplay: React.StatelessComponent<
  NumberDisplayProps
> = props => <span>{props.value}</span>;
