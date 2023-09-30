import React from 'react';
import emailjs from 'emailjs-com';
import './style.css';
import swal from 'sweetalert';
const Contact = (props) => {
    const sentEmail = async (e)=>{
        e.preventDefault();
        
        try{
            const res = await emailjs.sendForm("service_aeboqow","template_gf8puij",e.target,"MuU7iPJ2K_ei9_euw");
            console.log(res);
            swal("Thank you!", "Your message was sent and you get a mail from me shortly", "success");  
            document.getElementById("myForm").reset();
        }catch(e){
            console.log(e);
            swal("OOPS!", "There was a Error!", "warning");
        }

    }
  return <section className={`contact ${props.mode?'':'temp'}`} id="contact">
  <div className="max-width">
      <h2 className="title">Contact me</h2>
      <div className="contact-content">
          <div className="column left">
              <div className="text">Get in Touch</div>
              <p>Connect with me for projects,discussion,programming. I am beginner in this field so come and join with me.</p>
              <div className="icons">
                  <div className="row">
                      <i className="fas fa-user"></i>
                      <div className="info">
                          <div className="head">Name</div>
                          <div className="sub-title">Aniruddha Dhal</div>
                      </div>
                  </div>
                  <div className="row">
                      <i className="fas fa-map-marker-alt"></i>
                      <div className="info">
                          <div className="head">Address</div>
                          <div className="sub-title">Jhargram,West Bengal,India</div>
                      </div>
                  </div>
                  <div className="row">
                      <i className="fas fa-envelope"></i>
                      <div className="info">
                          <div className="head">Email</div>
                          <div className="sub-title">aniruddha2000dhal@gmail.com</div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="column right">
              <div className="text">Message me</div>
              <form onSubmit={sentEmail} id='myForm'>
                  <div className="fields">
                      <div className="field name">
                          <input type="text" name='name' placeholder="Name" required/>
                      </div>
                      <div className="field email">
                          <input type="email" name='email' placeholder="Email" required/>
                      </div>
                  </div>
                  <div className="field">
                      <input type="text" name='subject' placeholder="Subject" required/>
                  </div>
                  <div className="field textarea">
                      <textarea cols="30" rows="10" name='message' placeholder="Message.." required></textarea>
                  </div>
                  <div className="button-area">
                      <button type="submit">Send message</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
</section>;
};

export default Contact;
