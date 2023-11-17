import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import Results from "../Results";
import pets from "./mocks/pets";

test("renders correct with no pets", async () => {
  const { asFragment } = render(<Results pets={[]} />);

  expect(asFragment()).toMatchSnapshot();
});

test("renders correctly with some pets", () => {
  const { asFragment } = render(
    <StaticRouter>
      <Results pets={pets} />
    </StaticRouter>,
  );

  expect(asFragment()).toMatchSnapshot();
});
