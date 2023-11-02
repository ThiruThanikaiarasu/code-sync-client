import AuthModal from "../Components/AuthModal"
import {useState} from 'react'
import NavBarComponent from "../Components/NavBarComponent"

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)
    const authToken = false

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(true)
    }

    return (
        <div className="overlay">
            <NavBarComponent
                authToken={authToken}
                minimal={false}
                setShowModal={setShowModal}
                showModal={showModal}
                setIsSignUp={setIsSignUp}
            />
            <div className="home">
                <h1 className="primary-title">Code Together®</h1>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>


                {showModal && (
                    <AuthModal setShowModal={setShowModal} isSignUp={isSignUp}/>
                )}
            </div>
        </div>
    )
}
export default Home
