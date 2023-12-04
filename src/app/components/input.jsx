"use client";
import { useState, useEffect } from "react";
import defaultDates from "./dates.js";

export default function Input({ daySelected, setDaysArr }) {
  const [entry, setEntry] = useState("");

  useEffect(() => {
    if (daySelected) {
      setEntry(daySelected.diaryEntry || "");
    } else {
      setEntry("");
    }
  }, [daySelected]);

  function handleSubmit(e) {
    e.preventDefault();
    if (daySelected) {
      setDaysArr((prevDays) =>
        prevDays.map((day) =>
          day.dayNum === daySelected.dayNum
            ? { ...day, diaryEntry: entry, diaryEmoji: "❤️" }
            : day
        )
      );
      setEntry("");
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Enter Diary Entry:</label>
        </p>
        <textarea
          id="diary"
          name="diary"
          rows="4"
          cols="50"
          onChange={(e) => {
            setEntry(e.target.value);
          }}
          value={entry}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
