const { default: HomePage } = require('./page');
const { getByTestId } = require('@testing-library/react').render(<HomePage />);

describe('HomePage', () => {
  it('renders the Dashboard component', () => {
    jest.mock('./dashboard/page', () => () => <div data-testid="dashboard" />);
    expect(getByTestId('dashboard')).toBeInTheDocument();
  });
});
