import React from "react"
import "./styles.css"

const CardType1 = props => {
  const {
    img_url,
    name,
    previousCompany,
    currentCompany,
    college,
    testimonial,
  } = props.info
  return (
    <div className="card-type1-section">
      <div className="card-head">
        <div className="img-div">
          <img src={img_url} alt="user" className="said-img" />
        </div>

        <div className="info-div">
          <div className="name">{name}</div>
          <div className="prev-comp">Then: {previousCompany} </div>
          <div className="curr-comp">Now: {currentCompany}</div>
          <div className="college">{college}</div>
        </div>
      </div>

      <div className="card-content">{testimonial}</div>
    </div>
  )
}

export default CardType1
