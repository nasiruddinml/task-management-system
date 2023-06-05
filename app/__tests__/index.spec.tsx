import { render, screen, fireEvent } from '@testing-library/react';
import Home from '@app/page';

const router = jest.spyOn(require('next/navigation'), 'useRouter');

describe('Home', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders a text', () => {
    render(<Home />);

    const heading = screen.getByText('Go to dashboard');
    expect(heading).toBeInTheDocument();
  });

  it('testing dashboard routing', () => {
    render(<Home />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(router).toHaveBeenCalled();
  });

  it('renders homepage unchanged', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
