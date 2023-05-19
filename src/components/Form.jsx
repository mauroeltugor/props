const ContactForm = ({ nombre, email }) => {
  return (
    <div>
      <h2>Contact Form</h2>
      <form className="form">
        <div className="formBox">
          <label>Name</label>
          <input type="text" value={nombre} />
        </div>
        <div className="formBox"> 
          <label>Email</label>
          <input type="email" value={email} />
        </div>
        <div className="formBox">
          <label>Message</label>
          <textarea />
        </div>
        <button type="submit">Send</button>
      </form>
      <hr />
    </div>
  );
};

export default ContactForm;
