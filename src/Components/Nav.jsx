import { headerLogo } from "../../assets/images";
import { hamburger } from "../../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 z-10 absolute w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="fonts-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#sign-in"
              className="fonts-montserrat leading-normal text-lg font-bold"
            >
              Sign In
            </a>
          </li>
        </ul>
        <div className="hidden max-lg:block">
          <button> {/* Functionality missing, I'd like a sidebar... */}
            <img src={hamburger} alt="Hamburger Icon" width={25} height={25} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
