import Sign from "../../button/SignUp";

export default function Login()
{
    return(
        <form className="pure-form pure-form-stacked">
            <fieldset>
              <label htmlFor="name">Your Name</label>
              <input id="name" type="text" placeholder="Your Name" />
              <label htmlFor="email">Your Email</label>
              <input id="email" type="email" placeholder="Your Email" />
              <label htmlFor="password">Your Password</label>
              <input id="password" type="password" placeholder="Your Password" />
              <Sign />
            </fieldset>
          </form>
    )
}