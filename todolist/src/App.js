import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import todoReducer from './stores/todoSlice';
import TodoList from './components/TodoList';

const store = configureStore({
  reducer: {
    todos: todoReducer
  }
})

function App() {
  return (
    <Provider store={store}>
      <div>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
