import { render, screen } from '@testing-library/react';
import { CannedResponses } from './CannedResponses';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from '../../store/reducer';
import userEvent from '@testing-library/user-event';
import { VirtuosoMockContext } from 'react-virtuoso';
import { cannedResponesInitialState } from './__mocks__/cannedResponses.mock';

const renderComponent = () => {
  const store = createStore(reducer, cannedResponesInitialState);
  return render(
    <Provider store={store}>
      <VirtuosoMockContext.Provider value={{ viewportHeight: 500, itemHeight: 100 }}>
        <CannedResponses />
      </VirtuosoMockContext.Provider>
    </Provider>,
  );
};

describe('<CannedResponses />', () => {
  test('renders all responses by default', () => {
    renderComponent();

    expect(screen.getByText(/shared lorem ipsum/i)).toBeInTheDocument();
    expect(screen.getByText(/private lorem ipsum/i)).toBeInTheDocument();
  });

  test('filters by "Shared"', async () => {
    renderComponent();

    const sharedTab = screen.getByRole('button', { name: /shared/i });
    await userEvent.click(sharedTab);

    expect(screen.getByText(/shared lorem ipsum/i)).toBeInTheDocument();
    expect(screen.queryByText(/private lorem ipsum/i)).not.toBeInTheDocument();
  });

  test('filters by "Private"', async () => {
    renderComponent();

    const privateTab = screen.getByRole('button', { name: /private/i });
    await userEvent.click(privateTab);

    expect(screen.getByText(/private lorem ipsum/i)).toBeInTheDocument();
    expect(screen.queryByText(/shared lorem ipsum/i)).not.toBeInTheDocument();
  });

  test('search filters responses by content', async () => {
    renderComponent();

    const input = screen.getByPlaceholderText(/search/i);
    await userEvent.type(input, 'private lorem');

    expect(screen.getByText(/private lorem/i)).toBeInTheDocument();
    expect(screen.queryByText(/public lorem/i)).not.toBeInTheDocument();
  });

  test('search is case-insensitive', async () => {
    renderComponent();

    const input = screen.getByPlaceholderText(/search/i);
    await userEvent.type(input, 'PRIVATE LOREM');

    expect(screen.getByText(/private lorem/i)).toBeInTheDocument();
  });

  test('search result highlights using <mark>', async () => {
    renderComponent();

    const input = screen.getByPlaceholderText(/search/i);
    await userEvent.type(input, 'private lorem');

    const mark = screen.getByText(/private lorem/i);
    expect(mark.tagName).toBe('MARK');
  });

  test('clicking on a tag sets it as the search', async () => {
    renderComponent();

    const tag = screen.getByText(/billing/i);
    await userEvent.click(tag);

    const input = screen.getByPlaceholderText(/search/i);
    expect(input).toHaveValue('billing');
    expect(screen.getByText(/shared lorem ipsum/i)).toBeInTheDocument();
    expect(screen.queryByText(/private lorem ipsum/i)).not.toBeInTheDocument();
  });
});
