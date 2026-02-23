import React from 'react'

export default async function page({ params }) {
    const {dpath} = await params;
    console.log(dpath);
  return (
    <div>
        <div>
            catch all routes
        </div>
    <ul>
        {dpath.map((item, index)=>{
            return(
                <li key={index}>{item}</li>
            )
        })}
    </ul>
    </div>
    
  )
}
