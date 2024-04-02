import { it, expect } from "vitest";

import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";



it("renders without crashing", function () {
    render(<Card caption="Hello" src="hello" currNum='5' totalNum='10' />);
});

it("matches snapshot", function () {
    const { container } = render(<Card caption="Hello" src="hello" currNum='5' totalNum='10' />);
    expect(container).toMatchSnapshot();
});