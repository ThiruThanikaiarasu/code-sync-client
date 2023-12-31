import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import axios from 'axios'


const AuthModal = ({ setShowModal,  isSignUp }) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)
    const [cookies, setCookies] = useCookies(null)
    const [statusCode, setStatusCode] = useState(null)

    let navigate = useNavigate()

    console.log(email, password, confirmPassword)


    const handleClick = () => {
        setShowModal(false)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/.test(password);

        if (!isValidPassword) {
        alert("Password must have one uppercase letter, one lowercase letter, one number, one special character, and be between 8 and 16 characters long.");
        }

        try {
            if (isSignUp && (password !== confirmPassword)) {
                setError('Passwords need to match!')
                return
            }

            axios.post(`https://vercel.com/thiruthanikaiarasu/code-sync-server/api/v1/${isSignUp ? 'signup' : 'login'}`, {email, password})
            .then( response => {
                setData(response.data) 
                setStatusCode(response.status)
                console.log(data)
            })
            .catch(error => setError(error))
            console.log(error)
            setCookies('AuthToken',data.token)
            setCookies('UserId', data.user_id)
            
            if(statusCode === 201 && isSignUp) navigate('/onboarding')
            if(statusCode === 201 && !isSignUp) navigate('/dashboard')

            window.location.reload()
            

        } 
        catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="auth-modal">
            <div className="close-icon" onClick={handleClick}>ⓧ</div>

            <h2>{isSignUp ? 'CREATE ACCOUNT': 'LOG IN'}</h2>
            <p>By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    required={true}
                    onChange={handlePasswordChange}
                />

                {isSignUp && <input
                    type="password"
                    id="password-check"
                    name="password-check"
                    placeholder="confirm password"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />}
                <input className="secondary-button" type="submit"/>
                <p>{error}</p>
            </form>

            <hr/>
            <h2>GET THE APP</h2>

        </div>
    )
}
export default AuthModal
