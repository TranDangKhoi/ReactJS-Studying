import React from "react";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./components/error-boundary/ErrorComponent";
import Modal from "./components/Portal in React/Modal";
import Tooltip2 from "./components/Portal in React/Tooltip2";

// Nội dung để hiển thị khi component nào đó bị lỗi
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="p-4 text-red-500 bg-red-200">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {/* Ví dụ đây là component bị lỗi */}
        <ErrorComponent></ErrorComponent>
      </ErrorBoundary>
      <Tooltip2 text={"Tôi không bị lỗi"}>Yay</Tooltip2>
    </>
  );
}

export default App;
