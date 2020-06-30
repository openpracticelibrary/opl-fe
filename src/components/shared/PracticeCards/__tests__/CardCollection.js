import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";

import CardCollection from "../CardCollection";

import { LIKE_PRACTICE } from "../../../../graphql";

const mockCardCollectionProps = {
  practiceId: "aFak3ID4y0U",
  upvotes: 42,
  imgCount: 3,
  questions: 5,
};

describe("Card collection", () => {
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

    expect(
      getByText(`${mockCardCollectionProps.imgCount}`)
    ).toBeInTheDocument();
    expect(getByText(`${mockCardCollectionProps.imgCount}`)).toContainElement(
      getByTestId("cameraIcon")
    );

    expect(
      getByText(`${mockCardCollectionProps.questions}`)
    ).toBeInTheDocument();
    expect(getByText(`${mockCardCollectionProps.questions}`)).toContainElement(
      getByTestId("questionIcon")
    );
  });

  it("should modify upvotes when mutation is run", async () => {
    let practiceLiked = false;
    const likedPractice = {
      data: {
        updatePractice: {
          __typename: "updatePracticePayload",
          practice: {
            __typename: "Practice",
            id: "aFak3ID4y0U",
            upvotes: 43,
          },
        },
      },
    };

    const apolloMocks = [
      {
        request: {
          query: LIKE_PRACTICE,
          variables: { practiceId: "aFak3ID4y0U", upvotes: 43 },
        },
        result: () => {
          practiceLiked = true;
          return likedPractice;
        },
      },
    ];

    const { getByTestId } = render(
      <MockedProvider mocks={apolloMocks}>
        <CardCollection {...mockCardCollectionProps} />
      </MockedProvider>
    );

    fireEvent.click(getByTestId("heartSvg"));

    expect(getByTestId("heartIcon")).toHaveTextContent("42");
    await waitFor(() => expect(practiceLiked).toBe(true));
  });
});
