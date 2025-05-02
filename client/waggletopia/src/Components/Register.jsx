function Register() {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>
          Username
          <input type="text" placeholder="Username" name="username" required />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </label>
        <label>
          Name
          <input type="text" placeholder="Name" name="name" required></input>
        </label>
        <label>
          E-mail Address
          <input type="email" placeholder="email" name="email"></input>
        </label>
        <label>
          Mailing Address
          <input
            type="address"
            placeholder="mailing address"
            name="mailing_addres"
          ></input>
        </label>
        <label>
          Phone Number
          <input
            type="tel"
            placeholder="phone number"
            name="phone_number"
          ></input>
        </label>
        <label>
          Billing Address
          <input
            type="text"
            placehole="billing address"
            name="billing_address"
          ></input>
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
