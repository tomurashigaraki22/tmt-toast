import React from "react";
import { ToastProvider, useToast } from "./toast";

function ToastButton() {
  const addToast = useToast();

  return (
    <div>
      <button onClick={() => addToast("Operation successful", "success")}>
        Show Success Toast
      </button>
      <button onClick={() => addToast("Something went wrong", "error")}>
        Show Error Toast
      </button>
      <button onClick={() => addToast("Here is some information", "info")}>
        Show Info Toast
      </button>
    </div>
  );
}

function App() {
  return (
    <ToastProvider>
      <ToastButton />
    </ToastProvider>
  );
}

export default App;
