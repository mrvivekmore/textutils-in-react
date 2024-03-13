import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  function handleOnChange(event) {
    setText(event.target.value);
  }

  function handleRemoveSpaces() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  function handleUpClick() {
    let newText = text.toUpperCase();
    setText(newText);
  }

  function handleLoClick() {
    let newText = text.toLowerCase();
    setText(newText);
  }

  function handleCpClick() {
    let newText = text.replace(/(^|\.\s+)([a-z])/g, (match) =>
      match.toUpperCase()
    );

    let newText2 = newText.replace(/(^|\?\s+)([a-z])/g, (match) =>
      match.toUpperCase()
    );

    let newText3 = newText2.replace(/(^|\!\s+)([a-z])/g, (match) =>
      match.toUpperCase()
    );

    setText(newText3);
  }

  function handleResetClick() {
    setText("");
  }

  function handleCopyClick() {
    navigator.clipboard.writeText(text);
  }

  return (
    <>
      <div className="container mt-4">
        <h3 className="mb-2">Enter text below to Analyze</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="textbox"
            rows={8}
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "#fff" : "#2B3035",
              color: props.mode === "light" ? "#333" : "#fff",
            }}
          />
        </div>
        <div className="mb-4">
          <button className="btn btn-info m-2" onClick={handleRemoveSpaces}>
            Remove Extra Spaces
          </button>
          <button className="btn btn-primary m-2" onClick={handleUpClick}>
            UPPERCASE
          </button>
          <button className="btn btn-warning m-2" onClick={handleLoClick}>
            lovercase
          </button>
          <button className="btn btn-success m-2" onClick={handleCpClick}>
            Capitalize
          </button>
          <button className="btn btn-secondary m-2" onClick={handleCopyClick}>
            Copy to Clipboard
          </button>
          <button className="btn btn-warning m-2" onClick={handleResetClick}>
            Reset
          </button>
        </div>
        <hr />
        <div className="mt-3">
          <h4 className="mb-3">Your text summary</h4>
          <p>Words: {text.trim().split(/\s+/).length}</p>
          <p>Characters: {text.replace(/[^a-zA-Z]/g, "").length}</p>
          <p>Sentences: {(text.match(/[.!?]/g) || []).length}</p>
        </div>
        <hr />
        <div className="mt-3">
          <h4>Preview</h4>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default TextForm;
