import { render, cleanup, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";

import AddBeerForm from "../AddBeerForm";

describe("AddBeerForm", () => {
  beforeEach(() => cleanup());

  it("should render", () => {
    const { baseElement } = render(<AddBeerForm />);
    expect(baseElement).toMatchSnapshot();
  });

  it("should submit", async () => {
    const mockAddBeer = jest.fn();
    render(<AddBeerForm addBeer={mockAddBeer} />);
    await user.type(screen.getByLabelText(/name/i), "Foo");
    await user.type(screen.getByLabelText(/description/i), "Bar");
    await user.type(screen.getByLabelText(/label/i), "some url");
    await user.click(screen.getByText(/add beer/i));

    await waitFor(() => expect(mockAddBeer).toHaveBeenCalledTimes(1));
  });
});
