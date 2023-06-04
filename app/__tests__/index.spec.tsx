import { render, screen } from '@testing-library/react';
import Home from '@app/page';

describe('Home', () => {
  it('renders a text', () => {
    render(<Home />);

    const heading = screen.getByText('Go to dashboard');

    expect(heading).toBeInTheDocument();
  });

  it('renders homepage unchanged', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
