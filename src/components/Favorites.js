import React, { useState, useEffect, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DnDCard from './DnDCard';
import { getFavoriteMovies, updateFavorites } from '../services/favorites';
import '../Favorites.css';

const Favorites = ({ user }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadFavoriteMovies = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const movies = await getFavoriteMovies(user.googleId);
      setFavoriteMovies(movies);
    } catch (err) {
      console.error('Error loading favorite movies:', err);
      setError('Failed to load favorite movies');
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Load favorite movies when component mounts or user changes
  useEffect(() => {
    if (user && user.googleId) {
      loadFavoriteMovies();
    } else {
      setFavoriteMovies([]);
      setLoading(false);
    }
  }, [user, loadFavoriteMovies]);

  // Move card function for drag and drop
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setFavoriteMovies((prevCards) => {
      const newCards = [...prevCards];
      const draggedCard = newCards[dragIndex];
      newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, draggedCard);
      return newCards;
    });
  }, []);

  // Save the new order to database
  const saveNewOrder = useCallback(async (newOrder) => {
    if (!user || !user.googleId) return;
    
    try {
      const favoriteIds = newOrder.map(movie => movie._id);
      await updateFavorites(user.googleId, favoriteIds);
    } catch (err) {
      console.error('Error saving new order:', err);
      // Optionally show an error message to the user
    }
  }, [user]);

  // Save order when movies array changes
  useEffect(() => {
    if (favoriteMovies.length > 0 && !loading) {
      const timeoutId = setTimeout(() => {
        saveNewOrder(favoriteMovies);
      }, 1000); // Debounce the save operation

      return () => clearTimeout(timeoutId);
    }
  }, [favoriteMovies, saveNewOrder, loading]);

  if (!user) {
    return (
      <div className="favorites-container">
        <div className="favorites-content">
          <div className="favorites-empty">
            <h3>Please Log In</h3>
            <p>You need to be logged in to view and manage your favorite movies.</p>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="favorites-container">
        <div className="favorites-content">
          <div className="favorites-empty">
            <h3>Loading...</h3>
            <p>Loading your favorite movies...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="favorites-container">
        <div className="favorites-content">
          <div className="favorites-empty">
            <h3>Error</h3>
            <p>{error}</p>
            <button onClick={loadFavoriteMovies} className="btn btn-primary">
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="favorites-container">
        <div className="favorites-content">
          <div className="favorites-instructions">
            <h2>Your Favorites</h2>
            <p>
              Drag your favorite movies to rank them in order of preference. 
              The order will be automatically saved as you make changes.
            </p>
            <p>
              You can also click on the star icons on the Movies page to add 
              or remove movies from your favorites list.
            </p>
          </div>
          
          <div className="favorites-list">
            <h3>Ranked Favorites ({favoriteMovies.length})</h3>
            
            {favoriteMovies.length === 0 ? (
              <div className="favorites-empty">
                <h3>No Favorites Yet</h3>
                <p>
                  You haven't added any movies to your favorites yet. 
                  Go to the Movies page and click the star icons to add movies to your favorites.
                </p>
              </div>
            ) : (
              <div>
                {favoriteMovies.map((movie, index) => (
                  <DnDCard
                    key={movie._id}
                    id={movie._id}
                    index={index}
                    movie={movie}
                    moveCard={moveCard}
                    rank={index + 1}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Favorites; 