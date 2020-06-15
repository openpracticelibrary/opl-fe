import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import FilterTags from "../FilterTags";

it("should render all the tags passed to the component", () => {
  const { getByTestId } = render(
    <MockedProvider mocks={[]}>
      <FilterTags />
    </MockedProvider>
  );

  expect(getByTestId("filterTags")).toBeInTheDocument();

  // expect(getByTestId("herotext")).toHaveTextContent("Explore the library");
  // expect(getByAltText("📚")).toBeInTheDocument();
});
