import './App.css'
import MiniDrawer from './components/MiniDrawer'
import Resume from './pages/Resume/Resume';
import ResumeProvider from './context/ResumeContext/ResumeProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import { AuthContextProvider } from './context/AuthContext/AuthContextProvider';
import AuthRoutes from './components/AuthenticatedRoutes';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/login" element={<Login/>} />
              <Route Component={MiniDrawer}> 
                <Route element={<AuthRoutes/>}>
                  <Route path="/resume" element={<ResumeProvider><Resume /></ResumeProvider>} />
                  <Route path="/profile" element={<Profile/>} />
                </Route>
              </Route>
            </Routes>
            <Footer/>
          </BrowserRouter>
      </AuthContextProvider>
    </>
  )
}

export default App
