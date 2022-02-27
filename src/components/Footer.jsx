import '../styles/parts/footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-container">
        <div className="footer-contact">
          <h1>Contact Me</h1>
          <p className="footer-paragraph">Here is my contact information if you are interested in starting a collaboration.</p>
          <div className="contact-list-containter">
            list of contact info
          </div>
        </div>
        <div className="footer-social">
          <div className="social-list">
            social list here
          </div>
          <p className="copyright">© 2022 • Natalle Moura</p>
        </div>
      </div>
    </footer>
  );
};