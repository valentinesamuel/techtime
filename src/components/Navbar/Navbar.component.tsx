import { FC, useState } from "react";
import Button from "../Button/Button.component";
import Pattern from "../../assets/images/pattern-background.svg";
import {
  NavbarContainer,
  NavLinks,
  NavLogo,
  HamburgerMenuToggler,
  MobileMenu,
  DesktopMenu,
} from "./Navbar.styles";

const Navbar: FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
  return (
    <NavbarContainer imageUrl={Pattern}>
      <NavLogo>TechTime</NavLogo>
      <NavLinks>
        <HamburgerMenuToggler
          navbarStatus={isNavbarOpen}
          onClick={() => setIsNavbarOpen((isNavbarOpen) => !isNavbarOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </HamburgerMenuToggler>

        <DesktopMenu>
          <li>
            <p className="active-link">Home</p>
          </li>
          <li>
            <p>About Us</p>
          </li>
          <li>
            <p>Courses</p>
          </li>
          <li>
            <p>Testimonials</p>
          </li>
          <li>
            <p>Community</p>
          </li>
          <li>
            <Button role="primary">Enroll Now</Button>
          </li>
        </DesktopMenu>
      </NavLinks>
      {isNavbarOpen && (
        <MobileMenu>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>About Us</p>
          </li>
          <li>
            <p>Courses</p>
          </li>
          <li>
            <p>Testimonials</p>
          </li>
          <li>
            <p>Community</p>
          </li>
          <li>
            <Button role="secondary">Enroll Now</Button>
          </li>
        </MobileMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
