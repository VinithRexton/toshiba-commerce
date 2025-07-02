import React from "react";

const opportunities = [
  {
    href: "/all-jobs",
    imgSrc: "//tbcdn.talentbrew.com/company/48663/img/photo/home_page/all_jobs_image_lg.webp",
    alt: "Top-down view of people using laptops and tablets at a table.",
    text: "All Jobs",
  },
  {
    href: "/search-jobs/engineering%20%26%20development",
    imgSrc: "//tbcdn.talentbrew.com/company/48663/img/photo/home_page/engineering_development_lg.webp",
    alt: "Hands working on a computer motherboard with tools",
    text: "Engineering & Development",
  },
  {
    href: "/search-jobs/Maintenance%20%26%20Field%20Support/",
    imgSrc: "//tbcdn.talentbrew.com/company/48663/img/photo/home_page/maintenance_field_support_lg.webp",
    alt: "Woman helping a man with computer setup in an office",
    text: "Maintenance & Field Support",
  },
  {
    href: "/search-jobs/Marketing%20%26%20Strategy",
    imgSrc: "//tbcdn.talentbrew.com/company/48663/img/photo/home_page/marketing_strategy_lg.webp",
    alt: "Team discussing strategy around a laptop with digital graphics",
    text: "Marketing & Strategy",
  },
  {
    href: "/search-jobs/Sales%20%26%20Solutions/",
    imgSrc: "//tbcdn.talentbrew.com/company/48663/img/photo/home_page/sales_solutions_lg.webp",
    alt: "Smiling woman speaking during a business meeting",
    text: "Sales & Solutions",
  },
  {
    href: "/search-jobs/Finance%20%26%20Accounting",
    imgSrc: "//tbcdn.talentbrew.com/company/48663/img/photo/home_page/finance_accounting_lg.webp",
    alt: "Financial charts, tablet, and pen on a desk",
    text: "Finance & Accounting",
  },
  {
    href: "/search-jobs/Corporate/",
    imgSrc: "//tbcdn.talentbrew.com/company/48663/img/photo/home_page/corporate_lg.webp",
    alt: "Group collaborating around a laptop in a bright office",
    text: "Corporate",
  },
  {
    href: "/search-jobs/Information%20Technology/",
    imgSrc: "//tbcdn.talentbrew.com/company/48663/img/photo/home_page/information_technology_lg.webp",
    alt: "Hand pointing at digital data graphics",
    text: "Information Technology",
  },
  {
    href: "/search-jobs/internship/",
    imgSrc: "//tbcdn.talentbrew.com/company/48663/img/photo/home_page/internship_lg.webp",
    alt: "Two young professionals smiling at a laptop",
    text: "Internship",
  },
  {
    href: "/search-jobs/Operations/",
    imgSrc: "//tbcdn.talentbrew.com/company/48663/img/photo/home_page/operations_lg.webp",
    alt: "Team of women in a meeting around a conference table",
    text: "Operations",
  },
  {
    href: "/search-jobs/Project%20Management%20and%20Analysis",
    imgSrc: "//tbcdn.talentbrew.com/company/48663/img/photo/home_page/project_management_and_analysis_lg.webp",
    alt: "Two men discussing data on a laptop",
    text: "Project Management and Analysis",
  },
  {
    href: "/search-jobs//supply%20chain%20management/",
    imgSrc: "//tbcdn.talentbrew.com/company/48663/img/photo/home_page/supply_chain_lg.webp",
    alt: "Hand pointing to a world map on a chalkboard.",
    text: "Supply Chain",
  },
];

const OpportunitiesSection = () => {
  return (
    <section className="section-11" data-section-id="136026" data-layout-item-id="48503">
      <div className="container">
        <div className="heading">
          <h2>Explore Opportunities</h2>
        </div>
        <div className="card reveal reveal-parent trigger">
          {opportunities.map(({ href, imgSrc, alt, text }) => (
            <div className="callout" key={href}>
              <a
                className="callout__wrapping-link"
                data-callout-action="url"
                data-target=""
                data-selector-name="calloutactionlink"
                href={href}
              >
                <div className="callout__image_wrapper">
                  <img className="callout__image" src={imgSrc} alt={alt} loading="lazy" />
                </div>
                <span className="callout__text">{text}</span>
                <span className="callout__excerpt"></span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
