import { render, screen, fireEvent } from '@testing-library/react';
import ReduxProvider, { store } from '@/app/providers/ReduxProvider';
import User from './User';

describe('User component', () => {
  it('should render user name and username', () => {
    render(
            <ReduxProvider store={store}>
                <User />
            </ReduxProvider>,
    );

    const nameElement = screen.getByText('Abdgali');
    const usernameElement = screen.getByText('Yerkingaliyev');

    expect(nameElement).toBeInTheDocument();
    expect(usernameElement).toBeInTheDocument();
  });

  it('should change user name when "Change name" button is clicked', async () => {
    render(
            <ReduxProvider store={store}>
                <User />
            </ReduxProvider>,
    );

    const changeNameButton = screen.getByRole('button', { name: /Change name/i });

    fireEvent.click(changeNameButton);

    const nameElement = screen.getByText('Test');

    expect(nameElement).toBeInTheDocument();
  });

  it('should change user username when "Change username" button is clicked', async () => {
    render(
            <ReduxProvider store={store}>
                <User />
            </ReduxProvider>,
    );

    const changeUsernameButton = screen.getByRole('button', { name: /Change username/i });

    fireEvent.click(changeUsernameButton);

    const usernameElement = screen.getByText('test_user');

    expect(usernameElement).toBeInTheDocument();
  });
});
