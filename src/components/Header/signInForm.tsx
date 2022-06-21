import { Link } from "react-router-dom";

export default function SignInForm() {

    return(

        <>
      <p className="contact-text">
        <Link to="/signIn"></Link>
        Sign In
      </p>

      <div className="contact-form">
        <div>
          <form>
            <div className="name-email-input d-flex">
              <div className="contact-form-input">
                <label>
                  Name
                </label>
                <div>
                  <input type="text" name="" value="" />
                </div>
              </div>

              <div className="contact-form-input">
                <label>
                  Email
                </label>
                <div>
                  <input type="email" name="" value="" />
                </div>
              </div>
            </div>


            <div className="subject-input">
              <label>
                Subject
              </label>
              <div>
                <input type="text" name="" value="" />
              </div>
            </div>



            <div className="message-input">
              <label>
                Message
              </label>
              <div>
                <textarea></textarea>
              </div>
            </div>


            <div className="send-btn">
              <button>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
    )

}