function Login({
    email,
    password,
    setEmail,
    setPassword,
    login,
    setPage
}) {

    return (

        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                width: "250px",
                margin: "100px auto"
            }}
        >

            <h1>Login</h1>

            <input
                placeholder="Email"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)
                }
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)
                }
            />

            <button onClick={login}>
                Login
            </button>

            <button
                onClick={() =>
                    setPage("register")
                }
            >
                Register Instead
            </button>

        </div>

    );

}

export default Login;