import { Route, Routes } from 'react-router-dom';
import SidebarPage from './pages/dashboardPage/SidebarPage';
import LandingPage from './pages/home/LandingPage';
import LoginPage from './pages/loginPage/LoginPage';
import RegisterPage from './pages/loginPage/RegisterPage'
import CategoryPage from './pages/dashboardPage/CategoryPage'
import { Root } from './route/Root';
import BoardPage from './pages/dashboardPage/BoardPage';
import AddTask from './pages/dashboardPage/AddTask'
import UpdateTask from './pages/dashboardPage/updateTask';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<RegisterPage />} />
        {/* <Route path='/register' element={<RegisterPage />} /> */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<Root />}>
          <Route path='/home' element={<SidebarPage/>}/>
          <Route path='/addNewTask' element={<AddTask />} />
          <Route path='/board' element={<BoardPage />} />
          <Route path='/category' element={<CategoryPage />} />
          <Route path='/updateTask' element={<UpdateTask />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
