"use client";
import { useEffect, useState } from "react";
import { validator } from "is-my-date-valid";
import defaultDates from "./dates.js";
import Input from "./input.jsx";

export default function Calendar({
  setDaySelected,
  daySelected,
  setDaysArr,
  daysArr,
}) {
  const [dates, setDates] = useState(defaultDates);
  const [index, setIndex] = useState(0);
  //const [daysArr, setDaysArr] = useState([]);
  //const [daySelected, setDaySelected] = useState(null);
  //const [isBlue, setBlue] = useState("false");

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
    setDaySelected(day);
    const newDay = daysArr.filter(
      (currentDay) => currentDay.dayNum === day.dayNum
    );
  }

  return (
    <div>
      {/* month toggle */}
      <div id="monthYearContainer">
        <button onClick={buttonLeftMonth}>{"<"}</button>
        <p>{dates[index].month}</p>
        <button onClick={buttonRightMonth}>{">"}</button>
      </div>
      {/* year toggle */}
      <div id="monthYearContainer">
        <button onClick={buttonLeftYear}>{"<"}</button>
        <p>{dates[index].year}</p>
        <button onClick={buttonRightYear}>{">"}</button>
      </div>
      {/* day display */}
      <div id="daysContainer">
        <div id="datesContainer">
          {daysArr.map((day) => {
            //const isSelected = day.dayNum === daySelected?.dayNum;
            const isSelected = daySelected && day.dayNum === daySelected.dayNum;
            const boxClass = isSelected ? "blue-boxes" : "boxes";
            return (
              <div
                className={boxClass}
                key={day.dayNum}
                onClick={() => handleClick(day)}
              >
                {day.dayNum}
                {day.diaryEmoji}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
