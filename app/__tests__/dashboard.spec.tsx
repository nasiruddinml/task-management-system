import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from '@app/(route pages)/dashboard/page';
import { Providers } from '@app/components/molecules/Providers/Providers';
import { rootReducer, store } from '@app/redux/store';
import { resetStateAction } from '@app/redux/actions/resetState';

describe('Dashboard', () => {
  let confirmSpy: any;
  beforeAll(() => {
    confirmSpy = jest.spyOn(window, 'confirm');
    confirmSpy.mockImplementation(jest.fn(() => true));
  });
  afterAll(() => {
    confirmSpy.mockRestore();
  });
  beforeEach(() => {
    jest.clearAllMocks();
    store.dispatch(resetStateAction);
  });

  it('renders dashboard unchanged', () => {
    const { container } = render(
      <Providers>
        <Dashboard />
      </Providers>,
    );
    expect(container).toMatchSnapshot();
  });

  it('render app title', async () => {
    render(
      <Providers>
        <Dashboard />
      </Providers>,
    );

    const heading = screen.getByText('Task Management App');
    expect(heading).toBeInTheDocument();
  });

  it('render state cards', async () => {
    render(
      <Providers>
        <Dashboard />
      </Providers>,
    );

    const heading = await screen.findByText('Total Tasks');
    expect(heading).toBeInTheDocument();
    const heading2 = await screen.findByText('Total Days');
    expect(heading2).toBeInTheDocument();
    const heading3 = await screen.findByText('Total Hours');
    expect(heading3).toBeInTheDocument();
  });

  it('test task add', () => {
    render(
      <Providers>
        <Dashboard />
      </Providers>,
    );
    const titleInput = screen.getByLabelText('Title field');
    const timeInput = screen.getByLabelText('time field');
    fireEvent.change(titleInput, { target: { value: 'testing task title' } });
    fireEvent.change(timeInput, { target: { value: 4 } });
    const addButton = screen.getByRole('button', { name: /Add/i });
    fireEvent.click(addButton);
    expect(screen.getByText('testing task title')).toBeInTheDocument();
    const deleteButton = screen.getByRole('button', { name: /Delete/i });
    fireEvent.click(deleteButton);
  });

  it('test delete action', async () => {
    render(
      <Providers>
        <Dashboard />
      </Providers>,
    );
    const titleInput = screen.getByLabelText('Title field');
    const timeInput = screen.getByLabelText('time field');
    fireEvent.change(titleInput, { target: { value: 'testing task title' } });
    fireEvent.change(timeInput, { target: { value: 4 } });
    const addButton = screen.getByRole('button', { name: /Add/i });
    fireEvent.click(addButton);
    const deleteButton = screen.getByRole('button', { name: /Delete/i });
    fireEvent.click(deleteButton);
    expect(confirmSpy).toHaveBeenCalled();
    expect(screen.getByText('No todo list! Hooray!!')).toBeInTheDocument();
  });

  it('test delete action cancel confirm', async () => {
    confirmSpy.mockImplementation(jest.fn(() => false));
    render(
      <Providers>
        <Dashboard />
      </Providers>,
    );
    const titleInput = screen.getByLabelText('Title field');
    const timeInput = screen.getByLabelText('time field');
    fireEvent.change(titleInput, { target: { value: 'testing task title' } });
    fireEvent.change(timeInput, { target: { value: 4 } });
    const addButton = screen.getByRole('button', { name: /Add/i });
    fireEvent.click(addButton);
    const deleteButton = screen.getByRole('button', { name: /Delete/i });
    fireEvent.click(deleteButton);
    expect(confirmSpy).toHaveBeenCalled();
    expect(screen.getByText('testing task title')).toBeInTheDocument();
    confirmSpy.mockImplementation(jest.fn(() => true));
    fireEvent.click(deleteButton);
  });

  it('test total task', async () => {
    confirmSpy.mockImplementation(jest.fn(() => false));
    render(
      <Providers>
        <Dashboard />
      </Providers>,
    );
    const titleInput = screen.getByLabelText('Title field');
    const timeInput = screen.getByLabelText('time field');
    fireEvent.change(titleInput, { target: { value: 'testing task title' } });
    fireEvent.change(timeInput, { target: { value: 4 } });
    const addButton = screen.getByRole('button', { name: /Add/i });
    fireEvent.click(addButton);
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('Total Tasks').nextElementSibling?.innerHTML).toBe(
      '1',
    );
    const deleteButton = screen.getByRole('button', { name: /Delete/i });
    fireEvent.click(deleteButton);
  });

  it('test total days', async () => {
    confirmSpy.mockImplementation(jest.fn(() => false));
    render(
      <Providers>
        <Dashboard />
      </Providers>,
    );
    const titleInput = screen.getByLabelText('Title field');
    const timeInput = screen.getByLabelText('time field');
    fireEvent.change(titleInput, { target: { value: 'testing task title' } });
    fireEvent.change(timeInput, { target: { value: 4 } });
    const addButton = screen.getByRole('button', { name: /Add/i });
    fireEvent.click(addButton);
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('Total Days').nextElementSibling?.innerHTML).toBe(
      '1',
    );
    const deleteButtons = screen.getAllByRole('button', { name: /Delete/i });
    deleteButtons.forEach(elm => fireEvent.click(elm));
  });

  it('test total hours', async () => {
    confirmSpy.mockImplementation(jest.fn(() => false));
    render(
      <Providers>
        <Dashboard />
      </Providers>,
    );
    const titleInput = screen.getByLabelText('Title field');
    const timeInput = screen.getByLabelText('time field');
    fireEvent.change(titleInput, { target: { value: 'testing task title' } });
    fireEvent.change(timeInput, { target: { value: 4 } });
    const addButton = screen.getByRole('button', { name: /Add/i });
    fireEvent.click(addButton);
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('Total Hours').nextElementSibling?.innerHTML).toBe(
      '12',
    );
    fireEvent.change(titleInput, { target: { value: 'testing task title' } });
    fireEvent.change(timeInput, { target: { value: 4 } });
    fireEvent.click(addButton);
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('Total Hours').nextElementSibling?.innerHTML).toBe(
      '16',
    );
    const deleteButtons = screen.getAllByRole('button', { name: /Delete/i });
    deleteButtons.forEach(elm => fireEvent.click(elm));
  });

  it('test input error for title empty', async () => {
    confirmSpy.mockImplementation(jest.fn(() => false));
    render(
      <Providers>
        <Dashboard />
      </Providers>,
    );
    const titleInput = screen.getByLabelText('Title field');
    const timeInput = screen.getByLabelText('time field');
    fireEvent.change(titleInput, { target: { value: '' } });
    fireEvent.blur(titleInput);
    fireEvent.change(timeInput, { target: { value: 4 } });
    const addButton = screen.getByRole('button', { name: /Add/i });
    fireEvent.click(addButton);
    expect(screen.getByText('Task title is required')).toBeInTheDocument;
    const deleteButtons = screen.getAllByRole('button', { name: /Delete/i });
    deleteButtons.forEach(elm => fireEvent.click(elm));
  });

  it('test input error for long text', async () => {
    confirmSpy.mockImplementation(jest.fn(() => false));
    render(
      <Providers>
        <Dashboard />
      </Providers>,
    );
    const titleInput = screen.getByLabelText('Title field');
    const timeInput = screen.getByLabelText('time field');
    fireEvent.change(titleInput, {
      target: {
        value:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    });
    fireEvent.blur(titleInput);
    fireEvent.change(timeInput, { target: { value: 4 } });
    const addButton = screen.getByRole('button', { name: /Add/i });
    fireEvent.click(addButton);
    expect(screen.getByText('Task title must have a maximum of 128 characters'))
      .toBeInTheDocument;
    const deleteButtons = screen.getAllByRole('button', { name: /Delete/i });
    deleteButtons.forEach(elm => fireEvent.click(elm));
  });

  it('test input error for time ', async () => {
    confirmSpy.mockImplementation(jest.fn(() => false));
    render(
      <Providers>
        <Dashboard />
      </Providers>,
    );
    const titleInput = screen.getByLabelText('Title field');
    const timeInput = screen.getByLabelText('time field');
    fireEvent.change(titleInput, { target: { value: 'Lorem Ipsum' } });
    fireEvent.change(timeInput, { target: { value: -1 } });
    fireEvent.blur(timeInput);
    const addButton = screen.getByRole('button', { name: /Add/i });
    fireEvent.click(addButton);
    expect(screen.getByText('Time Required must be in between 0 to 24'))
      .toBeInTheDocument;
    const deleteButtons = screen.getAllByRole('button', { name: /Delete/i });
    deleteButtons.forEach(elm => fireEvent.click(elm));
  });
});
