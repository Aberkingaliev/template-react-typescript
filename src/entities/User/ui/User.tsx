import Button from '@/shared/Button';
import styles from './User.module.css';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeUsername } from '../model/userSlice';
import { RootState } from '@/app/providers/ReduxProvider';

const User: FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  function handleNameChange() {
    dispatch(changeName('Test'));
  }

  function handleUsernameChange() {
    dispatch(changeUsername('test_user'));
  }

  return (
    <div className={styles['main-container']}>
        <div className={styles['user-info']}>
          <h1>{user.name}</h1>
          <h3>{user.username}</h3>
        </div>
      <div className={styles['user-action']}>
        <Button value='Change name' onClick={handleNameChange}/>
        <Button value='Change username' onClick={handleUsernameChange}/>
      </div> 
      </div>
  );
};
 
export default User;