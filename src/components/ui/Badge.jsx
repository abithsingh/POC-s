import { PRIORITIES, PRIORITY_ORDER } from "../../utils/Constants";

const Badge = ({ priority }) => {
  const config = PRIORITIES[priority];

  if (!config) return null;

  console.log("config" + { config });

  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: "20px",
        fontSize: "11px",
        fontWeight: 500,
        letterSpacing: "0.04em",
        backgroundColor: config.color + "22",
        color: config.color,
        border: `1px solid ${config.color}44`,
      }}
    >
        
      {config.label}
      
    </span>
  );
};

export default Badge;
