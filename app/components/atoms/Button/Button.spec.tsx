import { render, screen } from '@testing-library/react';
import Button from '@components/atoms/Button/Button';

describe('Button Component test', () => {
  it('renders a text', () => {
    render(<Button>I am a button</Button>);

    const buttonElement = screen.getByText('I am a button');

    expect(buttonElement).toBeInTheDocument();
  });

  it('renders button unchanged', () => {
    const { container } = render(<Button>I am a button</Button>);
    expect(container).toMatchSnapshot();
  });
});
