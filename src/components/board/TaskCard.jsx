import Badge from "../ui/Badge";
import "../../App.css";

const style = {
  background: 'var(--bg-card)',
}
const TaskCard = ({ task, onDelete }) => {
  return (
    <div className="TaskCard">
      <Badge priority="HIGH" />
      <p>Title</p>
      <button className = "RemoveCardBtn" onClick={() => onDelete()}>✕</button>
    </div>
  );
};

export default TaskCard;