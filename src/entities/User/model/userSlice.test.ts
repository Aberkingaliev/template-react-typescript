import userReducer, { changeName, changeUsername, UserState } from './userSlice';

describe('userSlice', () => {
  let initialState: UserState;

  beforeEach(() => {
    initialState = { id: 0, name: 'Abdgali', username: 'Yerkingaliyev' };
  });

  it('should handle changeName', () => {
    const name = 'Test';
    const action = changeName(name);
    const state = userReducer(initialState, action);

    expect(state.name).toEqual(name);
  });

  it('should handle changeUsername', () => {
    const username = 'test_user';
    const action = changeUsername(username);
    const state = userReducer(initialState, action);

    expect(state.username).toEqual(username);
  });
});
