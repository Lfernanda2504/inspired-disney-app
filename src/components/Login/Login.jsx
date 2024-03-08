import "../../styles/login.css"
const Login = () => {
    return (
        <div className="container-auth">
            <h2>Login</h2>

            <form>
                <label htmlFor='username'>Email</label>
                <input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    id="username"
                />
                <label htmlFor="Password"></label>
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />

                <div className="container-buttons">
                    <button className="btn-primary" type="submit">Log In</button>
                    <button className="btn-secundary" type="button"> Google </button>
                </div>
            </form>
        </div>
    )
}

export default Login;