import {
  Link,
  Outlet,
  ScrollRestoration,
  useNavigation,
} from "react-router-dom";

export function RootLayout() {
  const { state } = useNavigation();
  const isLoading = state === "loading";

  return (
    <>
      <nav className="top-nav">
        <div className="nav-text-large">My App</div>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/teachers">Teachers</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/faq">FAQs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <ScrollRestoration />
      {isLoading && <div className="loading-spinner" />}
      <div className={`container ${isLoading ? "loading" : ""}`}>
        <Outlet />
      </div>
    </>
  );
}
