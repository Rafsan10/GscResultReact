import React from "react";
import "./result.css";
const Result = ({ result, halfResult }) => {
  if (result.roll < 1 || result.roll > 1245) {
    return <h1 id="invalid">Invalid Roll</h1>;
  }

  const studentResult = halfResult[parseInt(result.roll)];
  console.log(studentResult.status);
  const resultTable = (
    <table className="student-result">
      <thead>
        <tr>
          <th colSpan={5}>Roll: {studentResult.roll}</th>
        </tr>
        <tr>
          <th colSpan={5} className={studentResult.status}>
            {studentResult.status}
          </th>
        </tr>
        <tr>
          <th colSpan={5}>Merit: {studentResult.merit} </th>
        </tr>
      </thead>
      <tbody>
        <tr className="sub-head">
          <td>Subject</td>
          <td>Total</td>
          <td>Grade</td>
          <td>CQ</td>
          <td>MCQ</td>
        </tr>
        <tr>
          <td className="sub">Bangla</td>
          <td>{studentResult.marks.Bangla[2]}</td>
          <td>{studentResult.marks.Bangla[3]}</td>
          <td>{studentResult.marks.Bangla[0]}</td>
          <td>{studentResult.marks.Bangla[1]}</td>
        </tr>
        <tr>
          <td className="sub">English</td>
          <td>{studentResult.marks.English[0]}</td>
          <td colSpan={4}>{studentResult.marks.English[1]}</td>
        </tr>
        <tr>
          <td className="sub">ICT</td>
          <td>{studentResult.marks.ICT[2]}</td>
          <td>{studentResult.marks.ICT[3]}</td>
          <td>{studentResult.marks.ICT[0]}</td>
          <td>{studentResult.marks.ICT[1]}</td>
        </tr>
        <tr>
          <td className="sub">Physics</td>
          <td>{studentResult.marks.Physics[2]}</td>
          <td>{studentResult.marks.Physics[3]}</td>
          <td>{studentResult.marks.Physics[0]}</td>
          <td>{studentResult.marks.Physics[1]}</td>
        </tr>
        <tr>
          <td className="sub">Chemistry</td>
          <td>{studentResult.marks.Chemistry[2]}</td>
          <td>{studentResult.marks.Chemistry[3]}</td>
          <td>{studentResult.marks.Chemistry[0]}</td>
          <td>{studentResult.marks.Chemistry[1]}</td>
        </tr>
        <tr>
          <td className="sub">Math</td>
          <td>{studentResult.marks.Math[2]}</td>
          <td>{studentResult.marks.Math[3]}</td>
          <td>{studentResult.marks.Math[0]}</td>
          <td>{studentResult.marks.Math[1]}</td>
        </tr>
        <tr>
          <td className="sub">Botany (Bio-1)</td>
          <td>{studentResult.marks.Botany[2]}</td>
          <td>{studentResult.marks.Botany[3]}</td>
          <td>{studentResult.marks.Botany[0]}</td>
          <td>{studentResult.marks.Botany[1]}</td>
        </tr>
        <tr>
          <td className="sub">Zoology (Bio-2)</td>
          <td>{studentResult.marks.Zoology[2]}</td>
          <td>{studentResult.marks.Zoology[3]}</td>
          <td>{studentResult.marks.Zoology[0]}</td>
          <td>{studentResult.marks.Zoology[1]}</td>
        </tr>
        <tr>
          <td className="sub">Total</td>
          <td colSpan={4}>{studentResult.total}</td>
        </tr>
        <tr>
          <td className="sub">Grade</td>
          <td>{studentResult.grade}</td>
          <td colSpan={4}>{studentResult.letter_grade}</td>
        </tr>
      </tbody>
    </table>
  );
  return (
    <section>
      <div className="personal-result">{resultTable}</div>
    </section>
  );
};

export default Result;
