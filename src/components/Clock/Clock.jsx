import React, { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const [refreshCount, setRefreshCount] = useState(0);
  const [dummy] = useState(null);

  const refreshTimeHandler = () => {
    setRefreshCount((prevState) => prevState + 1);
    setDate(new Date());
  };

  useEffect(() => {
    console.log("[Clock] useEffect with []");
    return () => {
        console.log("[Clock] useEffect return with []");
    }
  }, []);

  useEffect(() => {
    console.log("[Clock] useEffect with [date]");
  }, [date, dummy]);

  useEffect(() => {
    console.log("[Clock] useEffect with [dummy]");
  }, [dummy]);

  return (
    <div className="mt-4">
      <p>Time: {date.toLocaleTimeString()}</p>
      <p>Refresh count: {refreshCount}</p>
      <button className="btn btn-secondary mt-2" onClick={refreshTimeHandler}>
        Refresh Time
      </button>
    </div>
  );
};

export default Clock;
