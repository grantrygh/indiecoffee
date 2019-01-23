import React from "react";
import classes from './ContactForm.css'
import Button from '../../../components/UI/Button/Button'

const contactForm = () => {
	const boxes = ["name", "email", "subject", "message"];
	let type = null;
	let message = null;
	let boxType = null;

  return (
      <div className={classes.contactForm}>
          <form>
            {
				boxes.map( box => {
					// Sets the text and type of input box
					switch(box){
						case "name":
							type = "text";
							message = "Your name";
							break;
						case "email":
							type = "email";
							message = "Your email";
							break;
						case "subject":
							type = "text";
							message = "Subject";
							break;
						case "message":
							type = "text";
							message = "Your message";
							break;
					}

					// Creates the input box code
					switch(box){
						case "message":
							boxType = <textarea type={type} id={message} className={classes.formcontrol} rows="5" />
							break;
						default:
							boxType = <input type={type} id={box} className={classes.formcontrol} />
							break;

					}

					return (
						<React.Fragment>
							<label htmlFor={box} className={classes.greytext}> { message } </label>
							{ boxType }
							<br />
						</React.Fragment>
					)
				} )
			}

			<div className={classes.textcenter}>
				<Button>Send</Button>
			</div>

          </form>
      </div>
  );
};

export default contactForm;

// <textarea type="text" id="message" className={classes.formcontrol} rows="3"
//             />
