/* eslint-disable react/no-unescaped-entities */
import { Icon } from "../IconDesign/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "../About/about.css";
export function About() {
  return (
    <div className="contentAbout">
      <h1 className="titleAbout">ABOUT</h1>
      <Icon />
      <div className="contentPhrase">
        <p className="phrase">
          Freelancer is a free boostrap theme created by Start Bootstrap, The
          downland includes the complete source files includes the complete
          source files including HTML,CSS,and JavaScript as well as optional
          LESS stylesheets for easy customization
        </p>
        <p className="phrase">
          Wheter you're a student looking to showcase your work, a professional
          looking to attract clients, or a graphic artist looking to share your
          projects, this template is the perfect starting point!
        </p>
      </div>
      <div className="content-buttonAbout">
      <button className="buttonAbout">
        <FontAwesomeIcon
          icon={faDownload}
          size="2m"
          style={{ color: "#ffffff" }}
          className="iconButton"
        />
        <p className="phraseButton">Download Theme</p>
      </button>
      </div>
    </div>
  );
}
