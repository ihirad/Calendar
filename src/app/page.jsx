"use client";
import { useState } from "react";
import Calendar from "./components/calendar";
import Input from "./components/input";

export default function Home() {
  const [daySelected, setDaySelected] = useState(null);
  const [daysArr, setDaysArr] = useState([]);

  return (
    <main>
      <div id="calendar-container">
        <h1>Diary</h1>
        <Calendar
          setDaySelected={setDaySelected}
          daySelected={daySelected}
          setDaysArr={setDaysArr}
          daysArr={daysArr}
        />
        <Input daySelected={daySelected} setDaysArr={setDaysArr} />
      </div>
    </main>
  );
}
