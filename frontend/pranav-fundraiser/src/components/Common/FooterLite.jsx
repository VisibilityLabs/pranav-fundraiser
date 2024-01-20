import React from "react";

function FooterLite() {
  const footerContent = {
    COMPANY: ["About", "Impact", "Careers", "Team"],
    COMMUNITY: ["Blog", "Press", "Community Guidelines"],
    SUPPORT: ["Help", "Guides", "Privacy", "Policies", "Cookies"],
    CONNECT: ["Twitter", "Facebook", "Instagram"],
  };

  return (
    <div className="footer">
      <div className="all-footers">
        {Object.entries(footerContent).map(([heading, subHeadings]) => (
          <div>
            <div className="footer-heading">{heading}</div>
            <ul>
              {subHeadings.map((subHeading) => (
                <li className="footer-sub-heading">{subHeading}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="divider"></div>
      <div className="trademarks">
        <div className="copyrights">
          <div>© 2024, Medito Foundation</div>
          <div>
            This site is protected by reCAPTCHA and the Google{" "}
            <span className="privacy-policy"> Privacy Policy</span>
            and <span className="terms-of-service">Terms of Service</span>{" "}
            apply.
          </div>
        </div>
        <button type="button" className="language-button">
          English (United States)
        </button>
      </div>
    </div>
  );
}

export default FooterLite;