import { FC } from "react";

interface TodoProps {
  todo: {
    id: number;
    name: string;
    complete: boolean;
  };
  onToggle: () => void;
  onDelete: () => void;
}

const TodoComponent: FC<TodoProps> = ({ todo, onToggle, onDelete }) => {
  const todoNameStyles = {
    color: todo.complete ? "#AAA" : "#333",
    textDecoration: todo.complete ? "line-through" : "none",
  };
  return (
    <div className="d-flex gap-2">
      <input
        className="form-check-input"
        type="checkbox"
        id="checkboxNoLabel"
        value=""
        aria-label="..."
        onClick={onToggle}
      />
      <span style={todoNameStyles}>{todo.name}</span>
      <button className="btn btn-close" onClick={onDelete} />
    </div>
  );
};

export default TodoComponent;
