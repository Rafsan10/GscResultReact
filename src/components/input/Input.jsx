import React from "react";
import "./input.css";
function Input({ setResult, getMeritList, meritButtonStatus }) {
  function getResult(e) {
    e.preventDefault();
    getMeritList(false);
    setResult(formData);
  }

  function updateValue(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function toggleMerit() {
    getMeritList((prevValue) => !prevValue);
    setResult(false);
  }

  const [formData, setFormData] = React.useState({
    term: "halfyearly",
    roll: "",
  });

  return (
    <section>
      <div className="input-head">
        <h1>Get Result Hsc Batch 23</h1>
      </div>
      <div className="input">
        <form onChange={updateValue}>
          <div className="roll-input">
            <input
              type="number"
              name="roll"
              value={formData.roll}
              placeholder="Enter roll number"
              onChange={updateValue}
            />
          </div>
          <div className="term-input">
            <label id="halfYearly">
              <input
                type="radio"
                name="term"
                value="halfyearly"
                defaultChecked
              />
              Half yearly
            </label>
            <label id="yearly">
              <input type="radio" name="term" value="yearly" disabled />
              yearly
            </label>
          </div>
          <div className="search">
            <button className="btn" onClick={getResult}>
              Search
            </button>
          </div>
        </form>
        <div className="get-merit-list">
          <button className="btn" onClick={toggleMerit}>
            {meritButtonStatus ? "Hide Merit List" : "Get Merit List"}{" "}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Input;
