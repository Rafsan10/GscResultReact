import React from "react";

import "./meritList.css";

const MeritList = ({ merit }) => {
  const [range, setRange] = React.useState([0, 50]);

  const getNext = () => {
    if (range[1] < merit.length) {
      setRange([range[0] + 50, range[1] + 50]);
      document.querySelector("#focus").scrollIntoView({
        behavior: "smooth",
        // block: "center",
      });
    }
  };
  const getPrev = () => {
    if (range[0] > 0) {
      setRange([range[0] - 50, range[1] - 50]);
      document.querySelector("#focus").scrollIntoView({
        behavior: "smooth",
        // block: "center",
      });
    }
  };

  const meritElement = merit.slice(range[0], range[1]).map((merit) => {
    return (
      <div
        key={merit.roll}
        className={
          "single-merit " + (parseInt(merit.merit) % 2 ? "odd" : "even")
        }
        style={{ animationDuration: `${parseInt(merit.roll) * 0.1 * 12}ms` }}
      >
        <span>{merit.merit}</span>
        <span>{merit.roll}</span>
        <span>{merit.grade}</span>
        <span>{merit.total}</span>
      </div>
    );
  });
  return (
    <>
      <section className="merit-section">
        <div className="next-prev" id="next-prev">
          <button className="btn" onClick={getPrev}>
            previous
          </button>
          <button className="btn" onClick={getNext}>
            next
          </button>
        </div>
        <div className="merit-list">
          <div className="single-merit single-merit-head" id="focus">
            <span>Merit</span>
            <span>Roll</span>
            <span>Grade</span>
            <span>Total</span>
          </div>
          {meritElement}
        </div>
      </section>
    </>
  );
};

export default MeritList;
