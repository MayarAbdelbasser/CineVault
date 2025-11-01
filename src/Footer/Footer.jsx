import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faSquareInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <p>© 2025 CineVault. All rights reserved.</p>
        <div className={styles.footerIcons}>
          <div>
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div>
            <FontAwesomeIcon icon={faSquareInstagram} />
          </div>
          <div>
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
