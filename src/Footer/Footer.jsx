import './Footer.css'
export function Footer(){
    return(
        <>
        
        <footer className="footer d-flex justify-content-center mt-5">
      <div className="contact-info">
        <h5>Contactar</h5>
        <p>420 Smile<br/>ATLANTA - USA 12345<br/>Phone: 585-005-441</p>
      </div>

      <div className="social-media">
        <h5>Siguenos en: </h5>
        <ul>
          <li><a href="https://www.youtube.com/user/314Metro"> <i className="fab fa-facebook"></i>YouTube</a></li>
          <li><a href="https://twitter.com/metroboomin"><i className="fab fa-twitter"></i>Twitter</a></li>
          <li><a href="https://www.instagram.com/metroboomin/"><i className="fab fa-instagram"></i> Instagram</a></li>
        </ul>
      </div>
    </footer>
  

        
        </>
    )
}