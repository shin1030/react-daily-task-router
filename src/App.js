import './App.css';
import {
  HashRouter,
  NavLink,
  Route,
  Routes,
  Outlet,
  useParams
} from 'react-router-dom';
import { Register } from './Register';
import { Login } from './Login';
import { Todo } from './Todo';

function NotFound() {
  return <h1>Page Not Found</h1>
}
function Post() {
  return (
      <>
        <h3>Post頁面</h3>
        <Outlet />
      </>
    )
}

function PostId  (){
  const { id } = useParams();
  return(
    <>
      <p>Post ID:{id}</p>
    </>
  )
}

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        {/* 練習區 */}
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path='*' element={<NotFound />}></Route>
          <Route path="/post" element={<Post />}>
            <Route path=':id' element={<PostId />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
