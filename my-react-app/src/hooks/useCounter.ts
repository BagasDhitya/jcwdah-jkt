import { useState } from "react";

export function useCounter() {
  const [count, setCount] = useState<number>(0);
  const [average, setAverage] = useState<[]>([]);

  function increment() {
    setCount(count + 1);
    setAverage(count);
  }

  function decrement() {
    if (count <= 0) {
      alert("Number cannot be negative");
    } else {
      setCount(count - 1);
    }
  }

  return { increment, decrement, count, average };
}
