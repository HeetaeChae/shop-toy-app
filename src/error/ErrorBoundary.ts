import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  // getDerivedStateFromError 메소드는 하위 컴포넌트에서 오류의 정보를 return을 통해서 State에 저장하는 역할을 합니다.
  // error 파라미터는 발생한 오류의 정보를 담고 있습니다.
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // 오류 상태 업데이트
    return {
      hasError: true,
      error,
    };
  }

  // componentDidCatch 메소드는 오류 정보와 상세 정보를 파라미터로 얻을 수 있습니다.
  // 주로 오류를 로깅해야 할때 해당 메소드에 접근해서 로깅할 수 있습니다.
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log({ error, errorInfo });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    return hasError ? "오류 발생" : children;
  }
}
