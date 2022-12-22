import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routs';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App lg:mx-20">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
