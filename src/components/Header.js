import React from "react";
import Button from "./Button";

const Header = ({ onAdd, showAdd }) => {
  return (
    <header>
      <div className="flex max-w-xl mx-auto">
        <h2 className="flex-1 text-3xl tracking-wide">
          React Todos
        </h2>
        <Button
          onClick={onAdd}
          color={showAdd ? "#e3301c" : "#3cadc4"}
          teks={showAdd ? "Close" : "Add Task"}
        />
      </div>
    </header>
  );
};

export default Header;
