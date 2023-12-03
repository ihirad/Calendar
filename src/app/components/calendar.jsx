"use client";
import { useEffect, useState } from "react";
import { validator } from "is-my-date-valid";
import defaultDates from "./dates.js";
import Input from "./input.jsx";

export default function Calendar() {
  const [dates, setDates] = useState(defaultDates);
  const [index, setIndex] = useState(0);
  const [daysArr, setDaysArr] = useState([]);

  function buttonLeftMonth() {
    setIndex(index - 1);
  }
  function buttonRightMonth() {
    setIndex(index + 1);
  }
  function buttonLeftYear() {
    setIndex(index - 12);
  }
  function buttonRightYear() {
    setIndex(index + 12);
  }

  const populateDaysArr = () => {
    let daysArr = [];
    for (let i = 1; i <= dates[index].days; i++) {
      daysArr.push({ dayNum: i, diaryEntry: "", diaryEmoji: "" });
    }
    return daysArr;
  };

  useEffect(() => {
    setDaysArr(populateDaysArr());
  }, [dates, index]);

  function handleClick(day) {
    // console.log("clicked");
    // const oldDays = daysArr.filter(
    //   (currentDay) => currentDay.dayNum !== day.dayNum
    // );
  }

  return (
    <div>
      <div id="monthYearContainer">
        <button onClick={buttonLeftMonth}>{"<"}</button>
        <p>{dates[index].month}</p>
        <button onClick={buttonRightMonth}>{">"}</button>
      </div>
      <div id="monthYearContainer">
        <button onClick={buttonLeftYear}>{"<"}</button>
        <p>{dates[index].year}</p>
        <button onClick={buttonRightYear}>{">"}</button>
      </div>
      <div id="daysContainer">
        <div id="datesContainer">
          {daysArr.map((day) => {
            return (
              <div
                className="boxes"
                key={day.dayNum}
                onClick={handleClick(day)}
              >
                {day.dayNum}
              </div>
            );
          })}
        </div>
      </div>
      <Input daysArr={daysArr} setDaysArr={setDaysArr} index={index} />
    </div>
  );
}
