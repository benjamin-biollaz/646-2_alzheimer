import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Home from "../../Presentation/Components/Home.js";
import { DateFormatter } from "../../Utilities/DateFormatter.js";

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
    const mockResident = { firstName: 'John' }
    render(<Home resident={mockResident} />);
    const residentName = await screen.findByText('John');
    expect(residentName).toBeInTheDocument();

});

describe('calculateAge', () => {
    const df = new DateFormatter();
    
    it('returns an empty string if birthDate is undefined or has no seconds property', () => {
        expect(df.calculateAge()).toEqual('');
        expect(df.calculateAge({})).toEqual('');
        expect(df.calculateAge({ nanoseconds: 0 })).toEqual('');
    });

    it('returns the correct age based on the birthDate', () => {
        const birthDate = { seconds: 1000000000, nanoseconds: 0 }; // 09/09/2001
        jest.spyOn(Date, 'now').mockImplementation(() => new Date('2023-03-14T00:00:00.000Z'));
        expect(df.calculateAge(birthDate)).toEqual(21);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });
});