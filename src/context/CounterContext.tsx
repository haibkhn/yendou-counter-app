import React, { useState } from "react";
import { createContext } from "react";

type CounterContextType = {
  count: number;
  increment: () => void;
};

export const CounterContext = createContext<CounterContextType>({
  count: 0,
  increment: () => {},
});

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(() => count + 1);
  };

  // It passes the count and increment function to the value prop of the context provider
  // The children prop is rendered inside the context provider. It could be a single component or multiple components
  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
