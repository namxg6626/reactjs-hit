import React, { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleInterval = setInterval(
      () => setCount((prev) => prev + 1),
      1000
    );

    return () => {
      console.log("cleanup function");
      clearInterval(handleInterval);
    };
  }, []);

  return (
    <div
      id="counter"
      style={{ color: "yellow", padding: "4rem", backgroundColor: "red" }}
    >
      Counter: {count}
    </div>
  );
}
