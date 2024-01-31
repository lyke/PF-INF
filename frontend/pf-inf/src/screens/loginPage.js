function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br />
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default LoginPage;