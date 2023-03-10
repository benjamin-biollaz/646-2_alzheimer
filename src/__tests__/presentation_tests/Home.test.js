import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import Home from "../../Presentation/Components/Home.js";


test('test', () => {
    expect(true).toBe(true);
});

test('should render hello world', () => {
    render(<Home></Home>)
    const homeElement = screen.getByTestId('1');
    expect(homeElement).toBeInTheDocument();
    expect(homeElement).toHaveTextContent('Hello World!');
});

test('renders resident name', async () => {
    const mockResident = {firstName: 'John'}
    render(<Home resident={mockResident}/>);
    const residentName = await screen.findByText('John');
    expect(residentName).toBeInTheDocument();
    
});