import { Link } from "react-router-dom";
import { useContext } from 'react';
import UserContext, { UserConsumer } from '../context/UserContext';

const Navbar = () => {

  const isLogin = localStorage.getItem("user") == null ? false : true;

  const loggedIn = isLogin;
  const loggedOff = !isLogin;

  console.log(isLogin);
  console.log(loggedIn);
  console.log(loggedOff);
  return (
    <UserConsumer>
      {user => (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary mb-2">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand"> TODO APP </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active"> Home </Link>
                </li>

                <li className="nav-item" style={{ display: loggedIn ? "block" : "none" }}>
                  <Link to="/tasks" className="nav-link"> Tasks </Link>
                </li>
                <li className="nav-item" style={{ display: loggedIn ? "block" : "none" }}>
                  <Link to="/add" className="nav-link"> New Task </Link>
                </li>
                <li className="nav-item" style={{ display: loggedOff ? "block" : "none" }}>
                  <Link to="/login" className="nav-link"> Login </Link>
                </li>
                <li className="nav-item" style={{ display: loggedOff ? "block" : "none" }}>
                  <Link to="/register" className="nav-link"> Register </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </UserConsumer>

  )
}


export default Navbar;