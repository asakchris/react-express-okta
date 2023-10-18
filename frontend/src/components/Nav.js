import { Link } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import styled from "styled-components";

const Nav = () => {
  const { authState, oktaAuth } = useOktaAuth();

  const handleLogin = () => oktaAuth.signInWithRedirect();
  const handleLogout = () => oktaAuth.signOut();

  return (
    <>
      <Section>
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <ul>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
          <li>
            <Link to="/protected">Protected</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            {authState?.isAuthenticated ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <button onClick={handleLogin}>Login</button>
            )}
          </li>
        </ul>
      </Section>
    </>
  );
};

const Section = styled.nav`
  width: 90%;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-style: oblique;
    color: white;
  }

  a {
    text-decoration: none;
  }

  & ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & li {
      list-style-type: none;

      &:hover {
        text-decoration: underline;
      }

      &:nth-last-child(1) {
        margin-left: 1rem;
      }

      a {
        color: #333;
        font-weight: 500;
        font-size: 1rem;
        text-decoration: none;
      }

      & button {
        font-size: 1rem;
        color: #333;
        font-weight: 500;
        cursor: pointer;
        outline: none;
        border: none;
        background: transparent;
      }
    }
  }
`;

export default Nav;
