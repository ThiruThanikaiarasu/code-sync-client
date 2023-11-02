import Home from './routes/Home'
import Dashboard from './routes/Dashboard'
import OnBoarding from './routes/OnBoarding'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


const App = () => {
    
    const authToken = true

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {authToken && <Route path="/dashboard" element={<Dashboard/>}/>}
                {authToken && <Route path="/onboarding" element={<OnBoarding/>}/>}

            </Routes>
        </Router>
    )
}

export default App
