import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { server } from "../__mocks__/mockServer";
import App from "../App";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders top-level application text", () => {
  const APP_TEXT = "MOVIE TIME";

  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const textElement = screen.getByText(APP_TEXT);
  expect(textElement).toBeInTheDocument();
}); 