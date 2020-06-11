import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import RichMarkdownEditor from "../RichMarkdownEditor";

afterEach(cleanup);

it("renders login button and popover when clicked", async () => {
  const { getByText } = render(
    <MockedProvider mocks={[]}>
      <RichMarkdownEditor source="# Some awesome markdown" handleChange={() => {}} />
    </MockedProvider>
  );

  expect(getByText("Some awesome markdown")).toBeInTheDocument();
});
