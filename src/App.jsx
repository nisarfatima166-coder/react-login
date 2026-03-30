export default function App() {
  return (
    <>
    
    <div class="login-container">
        <form class="login-form">
            <h2>Login</h2>

            <div class="input-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required/>
            </div>

            <div class="input-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" required/>
            </div>

            <button type="submit">Login</button>

            <p class="register-link">
                Don't have an account? <a href="#">Register</a>
            </p>
        </form>
    </div>

    
    
    </>
  );
}