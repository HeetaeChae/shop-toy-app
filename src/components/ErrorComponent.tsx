import React from "react";

interface ErrorComponentProps {
  error: Error;
  resetErrorBoundary: () => void;
}

function ErrorComponent(props: ErrorComponentProps): JSX.Element {
  const { error, resetErrorBoundary } = props;

  return (
    <div>
      <div>{error?.message}</div>
      <button type={"button"} onClick={resetErrorBoundary}>
        {"재시도"}
      </button>
    </div>
  );
}

export default ErrorComponent;
