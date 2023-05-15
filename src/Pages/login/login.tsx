import React, { useState } from "react";

interface LoginState {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const [state, setState] = useState<LoginState>({
        username: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(state);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    value={state.username}
                    onChange={handleChange}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default Login;
