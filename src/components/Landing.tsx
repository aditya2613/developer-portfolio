import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "../config";
import { getAssetUrl } from "../utils/assetUrl";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";
  const landingRoles = config.developer.landingRoles ?? config.developer.title.split(" & ");
  const titleLine1 = landingRoles[0] ?? config.developer.title;
  const titleLine2 = landingRoles[1] ?? "";

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {firstName.toUpperCase()}
              {' '}
              <br />
              {lastName && <span>{lastName.toUpperCase()}</span>}
            </h1>
          </div>
          <div className="landing-info">
            <h3>An</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{titleLine1}</div>
            </h2>
            {titleLine2 && (
              <h2>
                <div className="landing-h2-info">{titleLine2}</div>
              </h2>
            )}
          </div>
          {/* Mobile photo - shows only on mobile when 3D character is hidden */}
          <div className="mobile-photo">
            <img src={getAssetUrl("images/mypicnbg.png")} alt={config.developer.fullName} />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
