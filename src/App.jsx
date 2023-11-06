import Home from './routes/Home'
import Dashboard from './routes/Dashboard'
import OnBoarding from './routes/OnBoarding'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import PersonalDetailsComponent from './Components/PersonalDetailsComponent'
import ExpertiseDetailsComponent from './Components/ExpertiseDetailsComponent'
import VerificationComponent from './Components/VerificationComponent'


const App = () => {
    
    const authToken = true

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {authToken && <Route path="/dashboard" element={<Dashboard/>}/>}
                {authToken && <Route path="/onboarding" element={<OnBoarding/>}/>}
                <Route path='/personalDetails' element={<PersonalDetailsComponent/>}/>
                <Route path='/expertiseDetails' element={<ExpertiseDetailsComponent/>}/>
                <Route path='/verificationDetails' element={<VerificationComponent/>}/>

            </Routes>
        </Router>
    )
}

export default App
