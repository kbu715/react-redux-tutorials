import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import TodosContainer from './components/TodosContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodosContainer />
        <hr />
        <UserContainer />
        <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <HooksIceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
