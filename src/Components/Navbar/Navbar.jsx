import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkModeAction } from "../../Services/Redux/Actions";

export const Navbar = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.isDarkMode);
  return (
    <div>
      <nav
        className={
          isDarkMode
            ? "navbar navbar-expand-lg navbar-light bg-secondary"
            : "navbar navbar-expand-lg navbar-dark bg-dark"
        }
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            React Redux Todo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <div className="d-flex">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={() => dispatch(darkModeAction())}
                />
                <label
                  className={
                    isDarkMode
                      ? "form-check-label text-dark"
                      : "form-check-label text-light"
                  }
                  htmlFor="flexSwitchCheckDefault"
                >
                  Dark Mode
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
