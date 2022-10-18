import React from "react";
import "./App.css";
import HackerNewsReducer from "./components/useEffect,useReducer,useState/hackernewsreducer/HackerNewsReducer";
import { ErrorBoundary } from "react-error-boundary";
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
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
        <HackerNewsReducer></HackerNewsReducer>
      </ErrorBoundary>
    </>
  );
}

export default App;
