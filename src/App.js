import Layout from './components/Layout.jsx'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/main/MainPage.jsx'
import RegisterUser from './pages/auth/RegisterUser.jsx'
import LoginUser from './pages/auth/LoginUser.jsx'

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='register' element={<RegisterUser />} />
                <Route path='login' element={<LoginUser />} />
            </Routes>
        </Layout>
    )
}