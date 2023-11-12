import Home from './routes/Home'
import Dashboard from './routes/Dashboard'
import OnBoarding from './routes/OnBoarding'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()

const App = () => {
    
    const authToken = true

    return (
        <QueryClientProvider client={queryClient}>
            <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {authToken && <Route path="/dashboard" element={<Dashboard/>}/>}
                {authToken && <Route path="/onboarding" element={<OnBoarding/>}/>}
                

            </Routes>
        </Router>
        </QueryClientProvider>
        
    )
}

export default App
