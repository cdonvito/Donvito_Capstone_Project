function Login() {
  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username
          <input type="text" placeholder="Username" name="username" required />
        </label>
        <label>Password
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </label>
      </div>
    </div>
  );
}

export default Login;
