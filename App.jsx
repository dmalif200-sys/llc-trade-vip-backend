import React from "react";
import Header from "./components/Header";
import PredictionCard from "./components/PredictionCard";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-300 flex flex-col items-center">
      <Header />
      <PredictionCard />
    </div>
  );
}

export default App;
