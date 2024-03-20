import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import FormTextInput from './FormTextInput';

describe('FormTextInput', () => {
  it('renders a label if provided', () => {
    render(<FormTextInput label="Example" />);

    const labelElement = screen.getByText('Example') as HTMLLabelElement;
    expect(labelElement).toBeInTheDocument();
  });

  it('renders an input', () => {
    render(<FormTextInput />);

    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
  });

  describe('FormTextInput', () => {
    it('calls onChange prop when input value changes', () => {
      const mockOnChange = vi.fn();
      render(
        <FormTextInput label="Test Input" name="test" onChange={mockOnChange} />
      );
      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'test value' } });
      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object));
    });
  });
});
