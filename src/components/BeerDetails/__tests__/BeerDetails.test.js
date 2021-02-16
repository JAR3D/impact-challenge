import { render as renderTL } from "@testing-library/react";

import BeerDetails from "../BeerDetails";

describe("BeerDetails", () => {
  const render = (props) => renderTL(<BeerDetails {...props} />);

  it("should render", () => {
    const { baseElement } = render({
      name: "Foo",
      description: "Bar",
      labels: {
        medium:
          "https://brewerydb-images.s3.amazonaws.com/beer/UJGpVS/upload_K4w7gB-medium.png",
      },
    });
    expect(baseElement).toMatchSnapshot();
  });
});
