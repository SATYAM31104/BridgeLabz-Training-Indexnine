import React from 'react'
import { Save } from 'lucide-react'

const Card = (props) => {
    return (
        <div className="card">
            <div className="top">
                <img src="https://www.logo.wine/a/logo/Flipkart/Flipkart-Logo.wine.svg" alt="Flipkart Logo" />
                <button>
                    <span>save</span>
                    <Save size={16} />
                </button>
            </div>
            <div className="center">
                <h3>{props.companyName}</h3>
                <p>{props.description}</p>
                <p>{props.location}</p>
                <button>apply</button>
            </div>

            <div className="bottom">
                <div className="price-container">
                    <h2>{props.payPerHour}</h2>
                    <p>price</p>
                </div>
            </div>
        </div>
    )
}

export default Card