import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";

import CardCollection from "../CardCollection";

const mockCardCollectionProps = {
  practiceId: "5ec55c99d36579001355faae",
  upvotes: 42,
  imgCount: 3,
  questions: 5,
};

it("should render the practice detail card with props", async () => {
  const { getByText, getByTestId } = render(
    <MockedProvider mocks={[]}>
      <CardCollection {...mockCardCollectionProps} />
    </MockedProvider>
  );
  expect(getByText(`${mockCardCollectionProps.upvotes}`)).toBeInTheDocument();
  expect(getByText(`${mockCardCollectionProps.upvotes}`)).toContainElement(
    getByTestId("heartIcon")
  );

  expect(getByTestId("heartSvg")).toBeInTheDocument();

  expect(getByText(`${mockCardCollectionProps.imgCount}`)).toBeInTheDocument();
  expect(getByText(`${mockCardCollectionProps.imgCount}`)).toContainElement(
    getByTestId("cameraIcon")
  );

  expect(getByText(`${mockCardCollectionProps.questions}`)).toBeInTheDocument();
  expect(getByText(`${mockCardCollectionProps.questions}`)).toContainElement(
    getByTestId("questionIcon")
  );
});

// it("should modify upvotes when mutation is run", async () => {
// let practiceLiked = false;

// const apolloMocks = [
// {
// request: {
// query: LIKE_PRACTICE,
// variables: { practiceId: "aFak3ID4y0U", upvotes: 2 },
// },
// result: () => {
// practiceLiked = true;
// return { data: { likePractice: { title: "A title", upvotes: 2 } } };
// },
// },
// ];

// const { getByText, getByTestId } = render(
// <MockedProvider mocks={apolloMocks}>
// <CardCollection {...mockCardCollectionProps} />
// </MockedProvider>
// );

// fireEvent.click(getByTestId("heartSvg"));

// await waitFor(() => expect(practiceLiked).toBe(true));

// expect(getByText("2")).toBeInTheDocument();
// });
