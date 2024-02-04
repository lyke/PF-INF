import Navbar from "../components/navbar";
export default function LoginPage() {
  return (
    <div>
      <Navbar />
      <div className='login-container' >
        <h1>Login Page</h1>
        <form className='login-form' >
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" />
          <br />
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
