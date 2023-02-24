import { render, screen} from "@testing-library/react";
import Home from "../Home";

test('test', () => {
    expect(true).toBe(true);
});

test('should render home component', () => {
    render(<Home/>);
    const homeElement = screen.getByTestId('1');
    expect(homeElement).toBeInTheDocument();
    expect(homeElement).toHaveTextContent('Hello World!');
});