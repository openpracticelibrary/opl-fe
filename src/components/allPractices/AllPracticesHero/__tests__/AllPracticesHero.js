import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";

import AllPracticesHero from "../";

it("should render the All Practices Hero text with emoji", () => {
  const { getByTestId } = render(
    <MockedProvider mocks={[]}>
      <AllPracticesHero />
    </MockedProvider>
  );
  expect(getByTestId("herotext")).toBeInTheDocument();
  expect(getByTestId("herotext")).toHaveTextContent("Explore the library");
});

