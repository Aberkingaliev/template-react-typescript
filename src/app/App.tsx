import Card from '@/widgets/Card';
import './App.css';
import { User } from '@/entities/User';
import ReduxProvider, { store } from './providers/ReduxProvider';

function App(): JSX.Element {
  return (
    <ReduxProvider store={store}>
      <div className='app flex flex-col gap-8'>
        <h1 className='text-3xl font-bold underline' data-testid='main_headline'>
          React & Typescript boilerplate
        </h1>
        <Card />

        <User />
      </div>
      </ReduxProvider>
  );
}

export default App;
