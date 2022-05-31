import React, { useState } from "react";
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      // e.preventDefault();
      onAdd(text);
      setText("");
    }
  };
  return (
    <div className="panel-block">
      <input
        type="text"
        // placeholder="Nhap"
        value={text}
        onKeyDown={handleEnter}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
