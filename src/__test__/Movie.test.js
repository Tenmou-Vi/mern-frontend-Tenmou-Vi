import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Movie from "../components/Movie";
import { server } from "../__mocks__/mockServer";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders movie component", async () => {
  render(
    <MemoryRouter initialEntries={["/movies/573a1390f29313caabcd4135"]}>
      <Routes>
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
    </MemoryRouter>
  );

  await waitFor(() => {
    const title = screen.getByText("Blacksmith Scene");
    expect(title).toBeInTheDocument();
  });

  const reviews = screen.queryByText("reviewed on");
  expect(reviews).toBeNull();
}); 