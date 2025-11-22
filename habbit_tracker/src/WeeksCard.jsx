import { useState, useEffect } from "react";
export default function WeeksCard({ habits = [], days, setHabit }) {
  const [selected, setSelected] = useState(() =>
    habits.map(() => days.map(() => false))
  );
  let loading = false;

  const handleClick = (hi, di) => {
    setSelected((prev) => {
      const next = prev.map((row) => row.slice());
      if (!next[hi]) next[hi] = (days || []).map(() => false);
      next[hi][di] = !next[hi][di];
      return next;
    });
  };

  const handleRemove = (hi) => {
    const newHabit = habits.filter((h) => {
      if (h.id !== hi + 1) {
        if (h.id > hi) {
          h.id = h.id - 1;
        }
        return h;
      }
    });
    setSelected(() => selected.filter((h, i) => i !== hi && h));
    setHabit(() => newHabit);
    loading = true;
  };

  useEffect(
    () => {
      const prev = selected.length;
      const newV = habits.length - prev;
      const newArr = Array.from({ length: newV }, () =>
        new Array(7).fill(false)
      );
      const updatedVal = [...selected, ...newArr];
      //setSelected( habits.map(() => days.map(() => false)))
      setSelected(updatedVal);
      loading = false;
    },
    [habits.length],
    loading
  );
  return habits.length !== 0 ? (
    <table className="my-table">
      <thead>
        <tr>
          <th>
            <h3>Habit</h3>
          </th>
          {days.map((d) => (
            <th key={d.id}>
              <h3>{d.name}</h3>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {habits.map((h, hi) => (
          <tr key={h.id}>
            <td
              className="cards"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <h3 style={{ margin: "10px" }}>{h.name} </h3>{" "}
              <button
                style={{
                  border: "hidden",
                  background: "none",
                  cursor: "pointer",
                }}
                onClick={() => handleRemove(hi)}
              >
                ❌
              </button>
            </td>
            {days.map((d, di) => (
              <td key={d.id}>
                <button
                  className={
                    selected[hi] && selected[hi][di]
                      ? "habit-dot completed"
                      : "habit-dot"
                  }
                  onClick={() => handleClick(hi, di)}
                >
                  <b>{d.name.charAt(0)}</b>
                </button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ) : null;
}
