import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  // 1

  // fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((r) => r.json())
  //   .then((d) => console.log(d));

  // axios
  //   .get('https://jsonplaceholder.typicode.com/users')
  //   .then((d) => console.log(d.data));

  return (
    <div className='App'>
      <h1>Hello World React is working. Func Comp</h1>;
    </div>
  );
}

export default App;
