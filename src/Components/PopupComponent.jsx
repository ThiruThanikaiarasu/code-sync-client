import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

const PopupComponent = ({setShowPopup, setFormData, formData}) => {

    const [data1, setData1] = useState([])

    useEffect( () => {
        fetchData()
        console.log("o")
    },[])

    const fetchData = async () => {
        const response = await axios.get('https://vercel.com/thiruthanikaiarasu/code-sync-server/api/v1/expertise')
        // console.log(response.data)
        setData1(response.data)
        console.log(response.data)
    }

    const handlePopup = () => {
        setShowPopup(false)
    }

    const handleChange = (event) => {
        const value = event.target.checked
        const name = event.target.name
        setFormData((prevState) => ({
            ...formData,
            expertise : event.target.value
        }))
    }

  return (
    <React.Fragment>
        <div className='popup-container'>
            <div className='popup-content'>
            {data1 && data1.map((data, index) => (
                <div className='multiple-input-container' key={index}>
                    <input
                        id="expertise-title"
                        type="radio"
                        name="gender_identity"
                        value={data.title}
                        onChange={handleChange}
                        checked={formData.expertise === data.title}
                    />
                    <label htmlFor="expertise-title">{data.title}</label>
                </div>
                
                
            ))}
            
        </div>
        <button onClick={handlePopup}>Close</button>
        </div>
    </React.Fragment>
  )
}

export default PopupComponent