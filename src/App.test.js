import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render loading", () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
