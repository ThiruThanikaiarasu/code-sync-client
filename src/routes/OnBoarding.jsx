import Nav from '../Components/NavBarComponent'
import {useState} from 'react'
import {useCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import PopupComponent from '../Components/PopupComponent'
import FileUploadComponent from '../Components/FileUploadComponent'


const OnBoarding = () => {
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const [formData, setFormData] = useState({
        user_id: cookies.UserId,
        first_name: "",
        dob_day: "",
        dob_month: "",
        dob_year: "",
        show_gender: false,
        gender_identity: "male",
        gender_interest: "female",
        url: "",
        about: "",
        expertise:"",
        matches: []
    })
    const [statusCode, setStatusCode] = useState(null)
    const [showPopup, setShowPopup] = useState(false)

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        console.log('submitted')
        e.preventDefault()
        
            axios.put('https://vercel.com/thiruthanikaiarasu/code-sync-server/api/v1/user', {formData})
            .then( (response) => setStatusCode(response.status))
            const success = response.status === 200
            if (success) navigate('/dashboard')
        

    }

    const handleChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handlePopup = () => {
        
        setShowPopup(true)
    }

    return (
        <div className='onboarding-container'>
            <Nav
                minimal={true}
                setShowModal={() => {
                }}
                showModal={false}
            />

            <div className="onboarding">
                <h2>CREATE ACCOUNT</h2>

                <form onSubmit={handleSubmit}>
                    <div>
                        <section>
                            <label htmlFor="first_name">First Name</label>
                            <input
                                id="first_name"
                                type='text'
                                name="first_name"
                                placeholder="First Name"
                                required={true}
                                value={formData.first_name}
                                onChange={handleChange}
                            />

                            <label>Birthday</label>
                            <div className="multiple-input-container">
                                <input
                                    id="dob_day"
                                    type="number"
                                    name="dob_day"
                                    placeholder="DD"
                                    required={true}
                                    value={formData.dob_day}
                                    onChange={handleChange}
                                />

                                <input
                                    id="dob_month"
                                    type="number"
                                    name="dob_month"
                                    placeholder="MM"
                                    required={true}
                                    value={formData.dob_month}
                                    onChange={handleChange}
                                />

                                <input
                                    id="dob_year"
                                    type="number"
                                    name="dob_year"
                                    placeholder="YYYY"
                                    required={true}
                                    value={formData.dob_year}
                                    onChange={handleChange}
                                />
                            </div>

                            <label>Gender</label>
                            <div className="multiple-input-container">
                                <input
                                    id="male-gender-identity"
                                    type="radio"
                                    name="gender_identity"
                                    value="male"
                                    onChange={handleChange}
                                    checked={formData.gender_identity === "male"}
                                />
                                <label htmlFor="male-gender-identity">Male</label>
                                <input
                                    id="female-gender-identity"
                                    type="radio"
                                    name="gender_identity"
                                    value="female"
                                    onChange={handleChange}
                                    checked={formData.gender_identity === "female"}
                                />
                                <label htmlFor="female-gender-identity">Female</label>
                                {/* <input
                                    id="more-gender-identity"
                                    type="radio"
                                    name="gender_identity"
                                    value="more"
                                    onChange={handleChange}
                                    checked={formData.gender_identity === "more"}
                                />
                                <label htmlFor="more-gender-identity">More</label> */}
                            </div>

                            <div>
                                
                                <input
                                    id="show-gender"
                                    type="checkbox"
                                    name="show_gender"
                                    onChange={handleChange}
                                    checked={formData.show_gender}
                                />
                                
                                <label htmlFor="show-gender">Hide Gender on my Profile</label>
                            </div>

                            {/* <label>Show Me</label> */}

                            {/* <div className="multiple-input-container">
                                <input
                                    id="man-gender-interest"
                                    type="radio"
                                    name="gender_interest"
                                    value="man"
                                    onChange={handleChange}
                                    checked={formData.gender_interest === "man"}
                                />
                                <label htmlFor="man-gender-interest">Man</label>
                                <input
                                    id="woman-gender-interest"
                                    type="radio"
                                    name="gender_interest"
                                    value="woman"
                                    onChange={handleChange}
                                    checked={formData.gender_interest === "woman"}
                                />
                                <label htmlFor="woman-gender-interest">Woman</label>
                                <input
                                    id="everyone-gender-interest"
                                    type="radio"
                                    name="gender_interest"
                                    value="everyone"
                                    onChange={handleChange}
                                    checked={formData.gender_interest === "everyone"}
                                />
                                <label htmlFor="everyone-gender-interest">Everyone</label>

                            </div> */}

                            <label htmlFor="about">About me</label>
                            <input
                                id="about"
                                type="text"
                                name="about"
                                required={true}
                                placeholder="I like long walks..."
                                value={formData.about}
                                onChange={handleChange}
                            />

                            
                        </section>

                        <section>

                            <label htmlFor="url">Github URL</label>
                            <input
                                type="url"
                                name="url"
                                id="url"
                                onChange={handleChange}
                                required={true}
                            />

                            <label htmlFor="url">Screenshot of Your Best Code</label>
                            
                            <FileUploadComponent/>

                        </section>
                    </div>
                    
                    <main>
                        <h5>Your are Expertise in</h5>
                        <button 
                            className='secondary-button'
                            onClick={handlePopup}
                        >
                            Add Expertise
                        </button>
                        
                        
                        {showPopup && 
                        <div className='popup'>
                            <PopupComponent 
                                setShowPopup = {setShowPopup}
                                setFormData={setFormData} 
                                formData={formData}
                            />
                        </div>
                        }
                        
                    </main>

                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}
export default OnBoarding
