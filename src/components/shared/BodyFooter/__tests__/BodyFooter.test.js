import React from "react";
import { ThemeProvider } from "@chakra-ui/core";
import { render, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';
import customTheme from '../../../../theme';
import BodyFooter from '../';

afterEach(cleanup);

it("renders BodyFooter correctly", ()=>{
  const { getByTestId } = render(
    <ThemeProvider theme={customTheme}>
      <BodyFooter/>
    </ThemeProvider>
  );
  expect(getByTestId("footer")).toBeInTheDocument();
  expect(getByTestId("connect")).toHaveTextContent("Please connect with us:");
  expect(getByTestId("poweredBy")).toHaveTextContent("powered by");
});

it("matches the snapshot", ()=>{
  const tree = renderer.create(
    <ThemeProvider theme={customTheme}>
      <BodyFooter/>
    </ThemeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
