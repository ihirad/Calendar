"use client";
import { useState } from "react";
import { validator } from "is-my-date-valid";
import defaultDates from "./dates.js";

export default function Days() {
  const [dates, setDates] = useState(defaultDates);

  for (let i = 0; i < dates.length; i++) {}

  return <div></div>;
}
