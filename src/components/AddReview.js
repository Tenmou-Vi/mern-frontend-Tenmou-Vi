import { useLocation } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import MovieDataService from '../services/movies';

const AddReview = ({ user }) => {
  const navigate = useNavigate();
  let params = useParams();
  let location = useLocation();

  // Hooks 必须在顶层调用
  const editing = useMemo(() => location.state && location.state.currentReview ? true : false, [location.state]);
  const initialReviewState = useMemo(() => (editing ? location.state.currentReview.review : ""), [editing, location.state]);
  const [review, setReview] = useState(initialReviewState);

  if (!user) {
    return <div>Please log in to add or edit a review.</div>;
  }

  const onChangeReview = e => {
    const review = e.target.value;
    setReview(review);
  };

  const saveReview = () => {
    var data = {
      review: review,
      name: user.name,
      user_id: user.googleId,
      movie_id: params.id,
    };
    if (editing) {
      data.review_id = location.state.currentReview._id;
      MovieDataService.updateReview(data)
        .then(response => {
          navigate("/movies/" + params.id);
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      MovieDataService.createReview(data)
        .then(response => {
          navigate("/movies/" + params.id);
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  return (
    <Container className="main-container">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>{ editing ? "Edit" : "Create" } Review</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            required
            value={review}
            onChange={onChangeReview}
          />
        </Form.Group>
        <Button variant="primary" onClick={saveReview}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddReview; 