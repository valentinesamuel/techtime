import fb from "../../assets/images/facebook.svg";
import tw from "../../assets/images/twitter.svg";
import yt from "../../assets/images/youtube.svg";
import ig from "../../assets/images/instagram.svg";
import dc from "../../assets/images/discord.svg";

import { NavLogo } from "../Navbar/Navbar.styles";
import {
  FooterContainer,
  FooterLogo,
  FT,
  Links,
  Socials,
  Subscribe,
} from "./Footer.styles";

type Props = {};

const Footer = (props: Props) => {
  return (
    <FooterContainer>
      <FooterLogo>
        <FT>TechTime</FT>
        <p>Reach out to us on any of our social media networks</p>
        <Socials>
          <li>
            <img src={fb} />
          </li>
          <li>
            <img src={tw} />
          </li>
          <li>
            <img src={yt} />
          </li>
          <li>
            <img src={ig} />
          </li>
          <li>
            <img src={dc} />
          </li>
        </Socials>
      </FooterLogo>
      <Links>
        <h5>Useful Links</h5>
        <p>Home</p>
        <p>About Us</p>
        <p>Our Courses</p>
        <p>Testimonials</p>
        <p>Our Community</p>
      </Links>
      <Links>
        <h5>Community</h5>
        <p>Help Centers</p>
        <p>Partners</p>
        <p>Suggestion</p>
        <p>Blog</p>
        <p>Newsletter</p>
      </Links>
      <Subscribe>
        <h5>Subscribe Us</h5>
        <div className="input">
          <input type="text" placeholder="Nft123@gmail.com" />
          <button>Send Message</button>
        </div>
      </Subscribe>
    </FooterContainer>
  );
};

export default Footer;
