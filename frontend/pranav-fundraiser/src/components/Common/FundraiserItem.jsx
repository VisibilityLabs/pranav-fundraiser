import React from 'react'
import { useNavigate } from 'react-router-dom'

export const FundraiserItem = ({data}) => {
  const navigate=useNavigate();
  return (
    <div className="fundraiser-item" onClick={()=>navigate('/')} >
      <div className="fundraiser-item-image">
        <img src={data.image} alt="" />
      </div>
      <div className="fundraiser-item-content">
        <div className="fundraiser-item-title">
          {data.title}
        </div>
       </div>
    </div>
  )
}
