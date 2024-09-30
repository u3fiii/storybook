import "../styles/components/popup.scss";

import squareAdd from "../assets/icons/add-square-linear.svg";
import close from "../assets/icons/close-linear.svg";
import artworkPlaceholder from "../assets/icons/artowork-palceholder.svg";

export interface Props {
  buttons: "one-button" | "two-button";
  artwork?: "with-artwork" | "without-artwork";
}

const Popup = ({ artwork = "with-artwork", buttons = "two-button" }: Props) => {
  return (
    <div className={`popup ${artwork}  ${buttons} `}>
      <div className="popup-content">
        <div className="close-btn">
          <img src={close} />
        </div>
        <div className="top-icon">
          <img src={squareAdd} />
        </div>
        <div className="title-description">
          <div className="title">Title</div>
          <div className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </div>
        </div>
        <div
          className={[
            "artwork-container",
            `artwork-container--${artwork}`,
          ].join(" ")}
        >
          <img src={artworkPlaceholder} />
        </div>
        <div className={`button-container ${buttons}`}>
          <div className="btn primary-btn">Confirm</div>
          <div className="btn secondary-btn">Cancel</div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
