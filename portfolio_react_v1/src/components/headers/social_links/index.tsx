import { useState } from "react";
import { LI, Link } from "../Style";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "../StyleClasses.css";

export type Props = {
  Href: string;
  Target?: string;
};

export default function SocialLinks(props: Props) {
  const [menuState, setMenuState] = useState(true);
  function handleMenuClick() {
    console.log("After click: " + menuState);
    setMenuState(!menuState);
  }

  return (
    <LI className={`dropdown ${menuState ? "disabled" : "enabled"}`}>
      <Link onClick={handleMenuClick} href={props.Href} target={props.Target}>
        socials
      </Link>
      <div className="dropdown-list">
        <ul className="dropdown-list-group">
          <li className="dropdown-list-item item">
            <a href="#" target="_blank">
              <FaLinkedin />
            </a>
          </li>
          <li className="dropdown-list-item item">
            <a href="#" target="_blank">
              <FaInstagram />
            </a>
          </li>
          <li className="dropdown-list-item item">
            <a href="#" target="_blank">
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </div>
    </LI>
  );
}
