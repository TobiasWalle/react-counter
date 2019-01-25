import * as React from "react";
import { Counter } from "./Counter";

export const App: React.StatelessComponent<{}> = () => (
  <div>
    <h1>My Counter</h1>
    <Counter />
  </div>
);
