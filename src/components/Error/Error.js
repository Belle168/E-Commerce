import { useHistory } from "react-router-dom";
import "./Error.css"

export const Error = () => {
  const history = useHistory();

  const homePageRedirectHandler = () => {
      history.push("/")
  }
  return (
    <div className="Error">
      <h1>404</h1>
      <p className="first">Page Not Found!</p>
      <p>
        Go back to &nbsp;
        <span
          className="home-redirect-button"
          onClick={homePageRedirectHandler}
        >
          Home Page
        </span>
      </p>
    </div>
  );
};


