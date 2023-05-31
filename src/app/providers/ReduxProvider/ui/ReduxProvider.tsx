import { FC } from 'react';
import { Provider } from 'react-redux';

interface IReduxProvider {
  children: React.ReactNode
  store: any
}

const ReduxProvider: FC<IReduxProvider> = ({ children, store }) => {
  return ( 
    <Provider store={store}>
        {children}
    </Provider>
  );
};
 
export default ReduxProvider;