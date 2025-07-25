import './App.css';
import {Route, Routes} from 'react-router-dom';
import MyPage from './pages/MyPage';
import Home from './pages/Home';
import Layout from './components/layout/Layout';

function App() {
  return (
   <>
    <Layout>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/mypage' element={<MyPage/>} />
    </Routes>
    </Layout>
   </>
  );
}

export default App;
