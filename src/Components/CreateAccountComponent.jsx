import React, { useState } from 'react'
import PersonalDetailsComponent from './PersonalDetailsComponent'
import DetailsComponent from './ExpertiseDetailsComponent'
import VerificationComponent from './VerificationComponent'

const CreateAccountComponent = () => {

    const [step, setStep] = useState(1)

    const prevStep = () => {
        setStep(step - 1)
    }

    const nextStep = () => {
        setStep(step + 1)
    }

    const renderStep = () => {
        switch (step) {
            case 1:
                return <PersonalDetailsComponent/>
            case 2:
                return <DetailsComponent/>
            case 3:
                return <VerificationComponent/>
            default :
                return null
        }
    }

  return (
    <div>
        <h2>Create Account</h2>
        {renderStep()}
        <button 
            className='secondary-button' 
            onClick={prevStep}
            disabled={step === 1}
        >
            Back
        </button>

        <button 
            className='secondary-button'
            onClick={nextStep}
            disabled={step === 3}
        >
            Next
        </button>

    </div>
  )
}

export default CreateAccountComponent