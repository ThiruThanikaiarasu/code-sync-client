import NavBarComponent from '../Components/NavBarComponent'

import axios from 'axios'
import CreateAccountComponent from '../Components/CreateAccountComponent'

const OnBoarding = () => {
    

    return (
        <div className='onboarding-container'>
            <NavBarComponent
                minimal={true}
                setShowModal={() => {
                }}
                showModal={false}
            />

            <div className="onboarding">
              <CreateAccountComponent/>
            </div>
            
        </div>
    )
}
export default OnBoarding
