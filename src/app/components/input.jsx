"use client";
import { useState } from "react";
import defaultDates from "./dates.js";

export default function Input(daysArr, setDaysArr, index) {
  const [entry, setEntry] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(entry);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="diary">Enter Diary Entry:</label>
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
