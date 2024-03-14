import { Route, Link } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children, ...rest }) => {
  const token = Cookies.get("jwt_token");
  if (!token) {
    // If user is not authenticated, redirect to login page
    return <Link to="/login" />;
  }
  // If user is authenticated, render the provided route
  return <Route {...rest}>{children}</Route>;
};

export default ProtectedRoute;
