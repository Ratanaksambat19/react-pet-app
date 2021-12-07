import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
    state = { hasError: false, redirect: false, countDown: 0 };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error boundary caught an Error, ", error, info);

        setTimeout(() => {
            this.setState({ redirect: true})
        }, 5000);

        const now = new Date();
        this.setState({ countDown: now.getSeconds() - 5 });
    }

    render() {
        if (this.state.redirect) {
            <Redirect to='/'/>
        } else if (this.state.hasError) {
            return (
                <h2>
                    This listing has an error. <Link to='/'>Home</Link> or wait {countDown}
                </h2>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;