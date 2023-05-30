import Card from '@/widgets/Card/ui/Card';
import './App.css';

function App(): JSX.Element {
  return (
    <div className='app'>
    <h1 className='text-3xl font-bold underline'>
      React & Typescript boilerplate
    </h1>
    <Card />
    </div>
  );
}

export default App;
