import React from 'react'
import ShowIndividualcollection from './ShowIndividualcollection'

const Showcollection = ({data}) => {
  return (
    <div  style={{display: "flex",flexWrap: "wrap",gap: "20px",
  }}>
        {
            data.map((item)=>{
                return <ShowIndividualcollection key={item._id} item={item}/>
            })
        }
    </div>
  )
}

export default Showcollection