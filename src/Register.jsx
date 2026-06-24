function Register({
    email,
    password,
    setEmail,
    setPassword,
    register,
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

            <h1>Register</h1>

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

            <button
                onClick={register}
            >
                Register
            </button>

            <button
                onClick={() =>
                    setPage("login")
                }
            >
                Login Instead
            </button>

        </div>

    );

}

export default Register;