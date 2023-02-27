import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import Home from "../Presentation/Components/Home.js";

test('test', () => {
    expect(true).toBe(true);
});

test('should render hello world', () => {
    render(<Home/>);
    const homeElement = screen.getByTestId('1');
    expect(homeElement).toBeInTheDocument();
    expect(homeElement).toHaveTextContent('Hello World!');
});

/*test ('should render resident name', () => {
    render(<Home/>);
    const residentName = screen.getByTestId('2');
    expect(residentName).toBeInTheDocument();
    expect(residentName).toHaveTextContent('Marc');
});*/

