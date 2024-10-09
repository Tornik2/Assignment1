import "./Contact.css";

export function Contact() {
  return (
    <main className="contact_page no-scrollbar">
      <div className="contact_left">
        <div className="section_heading">
          <h1 className="section_name">Contact us</h1>
        </div>
        <form className="contact_form">
          <div className="form_group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form_input"
              placeholder="Enter your name"
              value={""}
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form_input"
              placeholder="Enter your email"
              value={""}
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="topic">Select a Topic:</label>
            <select id="topic" name="topic" className="form_select" required>
              <option value="">Choose a topic...</option>
              <option value="support">Support</option>
              <option value="sales">Sales</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form_group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              className="form_textarea"
              placeholder="Enter your message"
              required
            />
          </div>

          <button type="submit" className="form_submit">
            Submit
          </button>
        </form>
      </div>
      <div className="contact_right">
        <div className="contact_details_wrapper">
          <h1 className="section_name contact_details_heading">
            Contact Details
          </h1>
        </div>
        <div className="contact_details">
          <div className="contact_card">
            <p className="contact_email">tothemoon@yahoo.com</p>
            <p className="contact_phone">+995555399300</p>
          </div>
          <div className="contact_card">
            <h3 className="city">Tbilisi</h3>
            <p className="adress">146 E.Eristavi ave</p>
          </div>
          <div className="contact_card">
            <h3 className="city">Kutaisi</h3>
            <p className="adress">6 K.Gabashvili str.</p>
          </div>
          <div className="contact_card">
            <h3 className="city">Lagodexi</h3>
            <p className="adress">90a G.Mefe str.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
