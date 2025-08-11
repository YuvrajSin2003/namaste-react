import { render , screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';

test("Should load contact us components" , () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});


test("Should load button inside" , () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
});

test("should have 2 input boxes" , () => {
    render(<Contact />);

    const input = screen.getAllByRole("input");

    expect(input.length).toBe(2);
});