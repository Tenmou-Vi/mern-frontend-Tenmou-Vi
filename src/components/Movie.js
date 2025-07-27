import React, { useState, useEffect } from "react";
import MovieDataService from "../services/movies";
import { Link, useParams, useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import moment from "moment";
import Button from 'react-bootstrap/Button';

import "./Movie.css";

const Movie = ({ user }) => {
  const params = useParams();
  const location = useLocation();

  const [movie, setMovie] = useState({
    id: null,
    title: "",
    rated: "",
    reviews: [],
  });

  const getMovie = (id) => {
    MovieDataService.get(id)
      .then((response) => {
        setMovie(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    console.log("[Movie.js] useEffect triggered, params.id:", params.id, "location.key:", location.key);
    getMovie(params.id);
  }, [params.id, location.key]);

  const handleDeleteReview = (reviewId, index) => {
    const data = {
      review_id: reviewId,
      user_id: user.googleId,
    };
    MovieDataService.deleteReview(data)
      .then(response => {
        setMovie(prevState => {
          prevState.reviews.splice(index, 1);
          return { ...prevState };
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="poster">
              {movie.poster ? (
                <Image
                  className="bigPicture"
                  src={movie.poster}
                  onError={({ currentTarget }) => {
                    console.log(`Failed to load image for ${movie.title}: ${movie.poster}`);
                    currentTarget.onerror = null;
                    // Try a reliable placeholder service as fallback
                    currentTarget.src = `https://via.placeholder.com/600x900/cccccc/666666?text=${encodeURIComponent(movie.title)}`;
                  }}
                  fluid
                />
              ) : (
                <Image
                  className="bigPicture"
                  src="/images/custom-poster.jpg"
                  fluid
                />
              )}
            </div>
          </Col>
          <Col>
            <Card>
              <Card.Header as="h5">{movie.title}</Card.Header>
              <Card.Body>
                <Card.Text>{movie.plot}</Card.Text>
                {user && (
                  <Link to={`/movies/${params.id}/review`}>
                    Add Review
                  </Link>
                )}
                {movie.reviews && movie.reviews.map((review, index) => (
                  <div className="d-flex" key={index}>
                    <div className="flex-shrink-0 reviewsText">
                      <h5>{review.name + " reviewed on "}{moment(review.date).format("Do MMMM YYYY")}</h5>
                      <p className="review">{review.review}</p>
                      {user && user.googleId === review.user_id && (
                        <Row>
                          <Col>
                            <Link
                              to={{
                                pathname: `/movies/${params.id}/review/`,
                              }}
                              state={{
                                currentReview: review,
                              }}
                            >
                              Edit
                            </Link>
                          </Col>
                          <Col>
                            <Button variant="link" onClick={() => handleDeleteReview(review._id, index)}>
                              Delete
                            </Button>
                          </Col>
                        </Row>
                      )}
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Movie; 