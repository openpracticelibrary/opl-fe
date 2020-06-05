import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import renderer from 'react-test-renderer';
import Landing from '../Landing';

afterEach(cleanup);

it("renders the Explore hero without crashing", () => {
  const { getByTestId } = render(
    <MockedProvider mocks={[]}>
      <Landing greeting="Wazzup" welcomeMessage="What's up" inquiry="What is up?" />
    </MockedProvider>
  );

  expect(getByTestId("hellotext")).toHaveTextContent("Wazzup");
  expect(getByTestId("welcomeText")).toHaveTextContent("What's up");
  expect(getByTestId("inquiryText")).toHaveTextContent("What is up?");
});

it("matches the snapshot", () => {
  const tree = renderer.create(
    <MockedProvider mocks={[]}>
      <Landing greeting="Wazzup" welcomeMessage="What's up" inquiry="What is up?" />
    </MockedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
