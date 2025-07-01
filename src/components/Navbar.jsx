import './Navbar.scss';

export default function Navbar() {
 return (
    <header>
      <section className="section-1">
        <div className="section-1__top">
          <ul className="section-1__top-links">
            <li className="recently-viewed-job-list">
              <a href="/saved-jobs">
                <i className="fa-thin fa-star-sharp"></i> Saved Jobs (0)
              </a>
            </li>
          </ul>
        </div>

        <div className="section-1__main">
          <div className="container fs-container fs-middle">
            <div className="section-1__logo fs-12 fs-m-4">
              <button className="mobile-menu-trigger" aria-label="Toggle Menu" aria-expanded="false">
                <span className="visually-hidden">Menu</span>
              </button>

              <section className="media-module">
                <a href="/en">
                  <picture>
                    <source
                      media="(min-width: 768px)"
                      srcSet="//tbcdn.talentbrew.com/company/48663/img/logo/main_logo_lg.webp"
                    />
                    <img
                      alt="Toshiba Logo"
                      src="//tbcdn.talentbrew.com/company/48663/img/logo/main_logo_sm.webp"
                      loading="lazy"
                    />
                  </picture>
                </a>
              </section>
            </div>

            <nav className="section-1__main-nav fs-12 fs-m-8">
              <ul className="section-1__links__list">
                <li>
                  <a
                    className="section-1-links__link"
                    href="/search-jobs"
                    data-custom-event="true"
                    data-custom-category="Header"
                    data-custom-label="Our Openings"
                  >
                    Our Openings
                  </a>
                </li>
                <li>
                  <a
                    className="section-1-links__link"
                    href="/our-locations"
                    data-custom-event="true"
                    data-custom-category="Header"
                    data-custom-label="Our Locations"
                  >
                    Our Locations
                  </a>
                </li>

                <li className="recently-viewed-job-list">
                  <a href="/saved-jobs">
                    <i className="fa-thin fa-star-sharp"></i> Saved Jobs (0)
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </header>
  );
}
