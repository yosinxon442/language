import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>{t("about_us")}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> +123 456 789</span>
            <span><i className="fas fa-envelope"></i> info@myshop.com</span>
          </div>
          <div className="socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <div className="footer-section links">
          <h2>{t("quick_links")}</h2>
          <ul>
            <li><p>{t("about")}</p></li>
            <li><p>{t("services")}</p></li>
            <li><p>{t("products")}</p></li>
            <li><p>{t("contact")}</p></li>
            <li><p>{t("privacy_policy")}</p></li>
          </ul>
        </div>

        <div className="footer-section contact-form">
          <h2>{t("contact_us")}</h2>
          <form>
            <input type="email" name="email" className="text-input contact-input" placeholder={t("your_email")} />
            <textarea name="message" className="text-input contact-input" placeholder={t("your_message")}></textarea>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-envelope"></i> {t("send")}
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} {t("footp")} | {t("designed_by")} MyShop
      </div>
    </footer>
  );
};

export default Footer;