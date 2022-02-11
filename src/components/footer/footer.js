import React from "react";
import classes from "../footer/footer.module.scss";

function Footer() {
  return (
    <div className={classes.footer__section}>
      <div className={classes.footer}>
        <div className={classes.main}>
          <h3 className={classes.main__header}>Get in Touch</h3>
          <img
            className={classes.main__icon}
            src="/assets/icons/icon-instagram.svg"
            alt="instagram"
          ></img>
          <img
            className={classes.main__icon}
            src="/assets/icons/icon-facebook.svg"
            alt=""
          />
          <img
            className={classes.main__icon}
            src="/assets/icons/icon-twitter.svg"
            alt=""
          />
          <div className={classes.card}>
            <div className={classes.card__container}>
              <div className={classes.card__info}>
                <h4 className={classes.card__info__name}>Cam Adams</h4>
                <p className={classes.card__info__position}>
                  The Bees Knees Management
                </p>
              </div>
              <div className={classes.card__address}>
                <p className={classes.info__address__street}>
                  503 Broadway Penthouse,
                </p>
                <p className={classes.info__address__city}>
                  New York, NY 10012, USA
                </p>
                <div className={classes.card__info__email}>
                  <p className={classes.card__info__emailaddress}>
                    info@thebeesknees.com
                  </p>
                </div>
              </div>
              <div className={classes.ndcard__container}>
                <div className={classes.ndcard__info}>
                  <h4 className={classes.ndcard__info__name}>Pearl Gregg</h4>
                  <p className={classes.ndcard__info__location}>
                    Limitless Artist Group
                  </p>
                </div>
                <div className={classes.ndcard__info__address}>
                  <p className={classes.ndcard__info__position}>
                    Booking Agent for
                  </p>
                  <p className={classes.ndcard__info__location}>
                    US / South America / Japan
                  </p>
                  <div class={classes.ndcard__info__email}>
                    <p class={classes.ndcard__info__emailaddress}>
                      pearl.gregg@limitlessag.com
                    </p>
                  </div>
                </div>
                <div className={classes.rdcard__info__address}>
                  <p className={classes.rdcard__info__position}>
                    Booking Agent for
                  </p>
                  <p className={classes.rdcard__info__city}>UK / EU / AU</p>
                  <div className={classes.rdcard__info__email}>
                    <p className={classes.rdcard__info__emailaddress}>
                      cwhyte@archentertainment.com
                    </p>
                  </div>
                </div>
              </div>
              <img
                className={classes.bottom__logo}
                src="/assets/logos/Logo-bandsite.svg"
                alt="bandsite-logo"
              ></img>
            </div>
            <div className={classes.copyright}>
              <p className={classes.copyright__text}>
                Copyright The Bees Knees © 2021 All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
