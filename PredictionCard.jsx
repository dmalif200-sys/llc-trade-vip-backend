import React, { useState, useEffect } from "react";

export default function PredictionCard() {
  const [prediction, setPrediction] = useState("Loading...");

  const fetchPrediction = async () => {
    try {
      const res = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: "user1" }),
      });
      const data = await res.json();
      setPrediction(data.prediction);
    } catch (err) {
      setPrediction("Error fetching prediction");
    }
  };

  useEffect(() => {
    fetchPrediction();
    const interval = setInterval(fetchPrediction, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 rounded-2xl shadow-lg glass-bg text-center w-64 mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Prediction</h2>
      <p className="text-2xl">{prediction}</p>
    </div>
  );
}
