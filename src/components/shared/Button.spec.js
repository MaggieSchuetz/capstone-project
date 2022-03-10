import { render, screen } from '@testing-library/react';
import Button from './Button.js';

describe('Button', () => {
  it('renders a default button', () => {
    render(<Button type="submit">Submit</Button>);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});

describe('disabledButton', () => {
  it('renders a disabled default button', () => {
    render(<Button className="delete">Delete</Button>);

    const deleteButton = screen.getByRole('button');
    expect(deleteButton).toHaveClass('delete');
  });
});

describe('deletedButton', () => {
  it('renders a delete  button', () => {
    render(
      <Button type="submit" isDisabled>
        Submit
      </Button>
    );

    const disabledButton = screen.getByRole('button');
    expect(disabledButton).toBeDisabled();
  });
});
