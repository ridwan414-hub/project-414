import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navbar bg-base-100 flex justify-center">
      <div className="max-w-[1280px] w-full flex justify-between">
        <div className="navbar-start w-fit">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">About us</NavLink>
              </li>
              <li>
                <NavLink to="/donar-list">Donar List</NavLink>
              </li>
              <li>
                <NavLink to={'/upcoming-events'}>Events</NavLink>
                <ul className="p-2">
                  <li>
                    <NavLink to="/upcoming-events">Upcoming Events</NavLink>
                  </li>
                  <li>
                    <NavLink to="/yearly-events">Yearly Events</NavLink>
                  </li>
                  <li>
                    <NavLink to="/permanent-events">Permanent Events</NavLink>
                  </li>
                  <li>
                    <NavLink to="/completed-events">Completed Events</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/gallery">Gallery</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/advisory-council">Committee</NavLink>
                <ul className="p-2">
                  <li>
                    <NavLink to="/advisory-council">Advisory Council</NavLink>
                  </li>
                  <li>
                    <NavLink to="/board-of-directors">
                      Board of Directors
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/entrepreneur-council">
                      Entrepreneur Council
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/patronage-council">Patronage Council</NavLink>
                  </li>
                  <li>
                    <NavLink to="/representative-council">
                      Representative Council
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/provincial-committee">
                  Provincial Committee
                </NavLink>
              </li>
              <li>
                <NavLink to="/join">Join</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Voice Of Muslims</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal z-10 px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">About us</NavLink>
            </li>
            <li>
              <NavLink to="/donar-list">Donar List</NavLink>
            </li>
            <li>
              <details>
                <summary>Events</summary>
                <ul className="p-2">
                  <li>
                    <NavLink to="/upcoming-events">Upcoming Events</NavLink>
                  </li>
                  <li>
                    <NavLink to="/yearly-events">Yearly Events</NavLink>
                  </li>
                  <li>
                    <NavLink to="/permanent-events">Permanent Events</NavLink>
                  </li>
                  <li>
                    <NavLink to="/completed-events">Completed Events</NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blogs</NavLink>
            </li>
            <li>
              <details>
                <summary>Committee</summary>
                <ul className="p-2">
                  <li>
                    <NavLink to="/advisory-council">Advisory Council</NavLink>
                  </li>
                  <li>
                    <NavLink to="/board-of-directors">
                      Board of Directors
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/entrepreneur-council">
                      Entrepreneur Council
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/patronage-council">Patronage Council</NavLink>
                  </li>
                  <li>
                    <NavLink to="/representative-council">
                      Representative Council
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <NavLink to="/provincial-committee">Provincial Committee</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal z-10 px-1 gap-1">
            <li>
              <button className="border border-violet-600">
                <NavLink to="/join">
                  Join
                </NavLink>
              </button>
            </li>
            <li>
              <button className="border border-red-600">
                <NavLink to="/login">Login</NavLink>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
