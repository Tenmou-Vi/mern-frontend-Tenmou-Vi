import { useState, useEffect, useCallback, useRef } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from "./components/Login";
import Logout from "./components/Logout";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";

import MoviesList from "./components/MoviesList";
import Movie from "./components/Movie";
import AddReview from "./components/AddReview";
import Favorites from "./components/Favorites";

import './App.css';
import { getFavorites, updateFavorites } from "./services/favorites";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function App() {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const isFirstLoad = useRef(true);

  const loadFavorites = useCallback(async () => {
    if (user && user.googleId) {
      try {
        const data = await getFavorites(user.googleId);
        setFavorites(data.favorites || []);
      } catch (e) {
        setFavorites([]);
      }
    } else {
      setFavorites([]);
    }
  }, [user, setFavorites]);

  useEffect(() => {
    loadFavorites();
    isFirstLoad.current = false;
  }, [loadFavorites]);

  useEffect(() => {
    if (!isFirstLoad.current && user && user.googleId) {
      updateFavorites(user.googleId, favorites);
    }
  }, [favorites, user]);

  useEffect(() => {
    console.log("user", user);
    if (user) {
      console.log("🔍 Current user googleId:", user.googleId);
      console.log("🔍 Current user email:", user.email);
      console.log("🔍 Current user sub:", user.sub);
    }
  }, [user]);

  const addFavorite = (movieId) => {
    setFavorites((prev) => [...prev, movieId]);
  };

  const deleteFavorite = (movieId) => {
    setFavorites((prev) => prev.filter((f) => f !== movieId));
  };

  useEffect(() => {
    let loginData = JSON.parse(localStorage.getItem("login"));
    if (loginData) {
      let loginExp = loginData.exp;
      let now = Date.now() / 1000;
      if (now < loginExp) {
        setUser(loginData);
      } else {
        localStorage.setItem("login", null);
      }
    }
  }, []);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="App">
        <Navbar bg="primary" expand="lg" sticky="top" variant="dark">
          <Container className="container-fluid">
            <Navbar.Brand href="/" className="brand">
              <img 
                src="/images/movies-logo.png" 
                alt="movies logo" 
                className="moviesLogo"
                onError={(e) => {
                  console.log("Logo failed to load:", e.target.src);
                  e.target.style.display = 'none';
                }}
                onLoad={() => {
                  console.log("Logo loaded successfully");
                }}
              />
              MOVIE TIME
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/movies" className="link">
                  Movies
                </Nav.Link>
                <Nav.Link as={Link} to="/favorites" className="link">
                  Favorites
                </Nav.Link>
              </Nav>
              { user ? (
                  <Logout setUser={setUser} clientId={clientId} />
                ) : (
                  <Login setUser={setUser} />
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route exact path={"/"} element={
            <MoviesList
              user={user}
              favorites={favorites}
              addFavorite={addFavorite}
              deleteFavorite={deleteFavorite}
            />
          } />
          <Route exact path={"/movies"} element={
            <MoviesList
              user={user}
              favorites={favorites}
              addFavorite={addFavorite}
              deleteFavorite={deleteFavorite}
            />
          } />
          <Route path={"/movies/:id"} element={
            <Movie user={user} />
          } />
          <Route path={"/movies/:id/review"} element={<AddReview user={user} />} />
          <Route path={"/favorites"} element={<Favorites user={user} />} />
        </Routes>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App; 