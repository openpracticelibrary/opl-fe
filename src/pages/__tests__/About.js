import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import renderer from 'react-test-renderer';
import About from '../About';

afterEach(cleanup);

it("renders the About page without crashing", () => {
  const { getByTestId } = render(
    <MockedProvider mocks={[]}>
      <About />
    </MockedProvider>
  );

  expect(getByTestId("aboutPageGrid")).toHaveTextContent("Learn about us");
});

it("matches the About page snapshot", () => {
  const tree = renderer.create(
    <MockedProvider mocks={[]}>
      <About />
    </MockedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
