import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h4>Oops, something went wrong.</h4>
          <p>
            Contact us and let us know you got this message.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;