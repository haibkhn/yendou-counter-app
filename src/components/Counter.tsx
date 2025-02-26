import { useToast } from "@chakra-ui/toast";
import { FaRegCheckCircle } from "react-icons/fa";

import React from "react";
import { useCounter } from "../hooks/useCounter";
import "../styles/Counter.css";
import "../styles/Toast.css";

const Counter: React.FC = () => {
  const { count, increment } = useCounter();
  const toast = useToast();

  const handleIncrement = () => {
    increment();

    // Show toast;
    toast({
      position: "top-left",
      duration: 3000,
      isClosable: true,
      render: () => (
        <div className="toast-container">
          <FaRegCheckCircle size={24} color="#74C898" />
          <div className="toast-text">
            <div>Incremented</div>
            <div>Counter is now {count + 1}</div>
          </div>
        </div>
      ),
    });
  };

  return (
    <div className="counter-container">
      <span className="counter-text">Current count {count}</span>
      <button className="counter-button" onClick={handleIncrement}>
        +1
      </button>
    </div>
  );
};

export default Counter;
