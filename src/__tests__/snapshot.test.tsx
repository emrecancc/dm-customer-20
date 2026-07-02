import { render } from '@testing-library/react';
import Dashboard from '../src/Dashboard';
import '@testing-library/jest-dom/extend-expect';

// Mock the system date to make snapshots deterministic
jest.useFakeTimers('modern');
jest.setSystemTime(new Date('2024-01-14'));

describe('Dashboard', () => {
  it('renders correctly', () => {
    const { container } = render(<Dashboard />);
    expect(container).toMatchSnapshot();
  });
});