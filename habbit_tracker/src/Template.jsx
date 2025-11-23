import React from "react";
import HabitCard from "./Habbits/HabitCard";
import App from "./App.css";
import { useState } from "react";
import WeeksCard from "./WeeksCard";

export default function Template() {
  const habits = [
    { id: 1, name: "Walking" },
    { id: 2, name: "Running" },
    { id: 3, name: "Gym" },
    { id: 4, name: "Drink 3L" },
    { id: 5, name: "Massage" },
  ];

  const days = [
    { id: 1, name: "Sun" },
    { id: 2, name: "Mon" },
    { id: 3, name: "Tue" },
    { id: 4, name: "Wed" },
    { id: 5, name: "Thu" },
    { id: 6, name: "Fri" },
    { id: 7, name: "Sat" },
  ];

  const [habit, setHabit] = useState([]);
  const handleClick = () => {
    const habitName = prompt("Add your habit");
    const obj = {
      id: habit.length + 1,
      name: habitName,
    };
    if (!habitName) return;
    setHabit((prev) => {
      const next = [...prev, obj];
      return next;
    });
  };
  return (
    <div className="Template">
      <header className="Header">
        <h1> Add Habbits</h1>
        <button onClick={handleClick}>➕</button>
      </header>
      <div className="">
        {/* <div className="cards"><HabitCard /></div>
              <div className="cards"><HabitCard /></div>
              <div className="cards"><HabitCard /></div>         */}
        <WeeksCard habits={habit} days={days} setHabit={setHabit} />
      </div>
    </div>
  );
}
