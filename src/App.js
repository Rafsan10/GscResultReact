import halfResult from "./data/result";
import halfMerit from "./data/merit";
import React from "react";
import Input from "./components/input/Input";
import Result from "./components/result/Result";
import Navbar from "./components/navbar/Navbar";
import MeritList from "./components/meritlist/MeritList";

function App() {
  const [result, setResult] = React.useState(false);
  const [showMeritList, setShowMeritList] = React.useState(true);
  return (
    <div>
      <Navbar />
      <Input
        setResult={setResult}
        getMeritList={setShowMeritList}
        meritButtonStatus={showMeritList}
      />

      {result && <Result result={result} halfResult={halfResult} />}
      {showMeritList && <MeritList merit={halfMerit} />}
    </div>
  );
}

export default App;
