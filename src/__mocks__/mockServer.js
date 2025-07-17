import { rest } from "msw";
import { setupServer } from "msw/node";

const mockRatingsResponse = ["A0", "APPROVED", "Approved", "G", "GP"];
const mockMovieResponse = {
  "movies": [
    {
      "_id": "573a1390f29313caabcd4135",
      "plot": "Three men hammer on an anvil and pass a bottle of beer around.",
      "title": "Blacksmith Scene",
      "fullplot": "A stationary camera looks at a large anvil",
      "rated": "UNRATED",
      "reviews": []
    },
    {
      "_id": "573a1390f29313caabcd42e8",
      "plot": "A group of bandits stage a brazen train hold-up.",
      "title": "The Great Train Robbery",
      "fullplot": "Among the earliest existing films in American cinem.",
      "rated": "TV-G",
      "reviews": []
    }
  ],
  "page": 0,
  "filters": {},
  "entries_per_page": 20,
  "total_results": 2
};

const mockServer = setupServer(
  rest.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/movies/ratings`,
    (_, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockRatingsResponse))
    },
  ),
  rest.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/movies`,
    (_, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockMovieResponse))
    }
  ),
  rest.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/movies/id/:id`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockMovieResponse.movies[0]));
  })
);

export { mockServer as server }; 