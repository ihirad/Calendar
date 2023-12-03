"use client";
import { useState } from "react";
import Calendar from "./components/calendar";
import { validator } from "is-my-date-valid";
import Days from "./components/days";

export default function Home() {
  const [dates, setDates] = useState([]);

  return (
    <main>
      <div id="calendar-container">
        <h1>Diary</h1>
        <Calendar />
        <Days />
      </div>
    </main>
  );
}
