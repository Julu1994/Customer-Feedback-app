import React, { useState } from "react";

interface SignUpState {
    username: string;
    email: string;
    password: string;
}

const SignUp: React.FC = () => {
    const [state, setState] = useState<SignUpState>({
        username: "",
        email: "",
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
                Email:
                <input
                    type="email"
                    name="email"
                    value={state.email}
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

export default SignUp;
