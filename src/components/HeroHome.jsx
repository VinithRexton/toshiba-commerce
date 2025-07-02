import React from "react";

const HeroHome = () => {
  return (
    <section
      id="hero-home"
      className="hero-banner section-3 section-3a"
      data-section-id="135244"
      data-layout-item-id="47928"
    >
      {/* Hero Banner - Image */}
      <div className="hero-banner__image-wrapper">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="https://tbcdn.talentbrew.com/company/48663/img/banner/hero_banner_sm.webp"
          />
          <img
            src="https://tbcdn.talentbrew.com/company/48663/img/banner/hero_banner_lg.webp"
            alt="An abstract banner with a fading black to white background. A red 3D logo 'TOGETHER COMMERCE' sits on the white, with small black squares scattered across both sections"
          />
        </picture>
      </div>

      {/* Hero Banner - Text */}
      <div className="hero-banner__text-wrapper">
        <div className="hero-banner__text-inner-wrapper">
          <h1>Toshiba Careers</h1>

          <p>
            As part of Toshiba Global Commerce Solutions, you'll be an integral
            partner to the success of our customers. We're passionate about
            retail transformation and solving the problems that retailers face
            every day to help them create more engaging shopping experiences.
            Want to be a part of it? Join our team today.
          </p>

          <div>
            <form
              className="search-form expandable"
              data-handle="expandable-toggle"
              data-expandable="false"
              action="/search-jobs"
              data-selector-name="searchform"
              data-filtered-categories=""
              data-location-geotype="ipambientonly"
              data-geolocation-url="/search-jobs/GetSearchRequestGeoLocation"
              data-module-name="Search Form"
              data-limited-facets="False"
              data-default-radius="50"
              data-location-cookie-lifespan="5"
              data-use-location-pin="true"
              data-expandable-id="search-form-a263e3dbda"
              role="search"
            >
              <a href="#search-form-fields" className="search-toggle expandable-toggle">
                Search Jobs
              </a>
              <div className="search-form-fields" role="group">
                <p>
                  <label className="hub-visually-hidden" htmlFor="search-keyword-a263e3dbda">
                    Keyword Search
                  </label>
                  <input
                    type="search"
                    id="search-keyword-a263e3dbda"
                    className="search-keyword"
                    placeholder="Keywords or Job Titles"
                    autoComplete="off"
                    name="k"
                    maxLength="150"
                  />
                </p>
                <input name="orgIds" type="hidden" value="48663" />
                <button type="submit">Search Jobs</button>
                <p className="search-location-error" aria-hidden="true"></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
