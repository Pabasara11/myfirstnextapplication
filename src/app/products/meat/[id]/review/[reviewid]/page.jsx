import React from 'react'

export default async function page({params}) {
  const { id, reviewid } = await params;

  return (
    <div> Meat item {id} Review {reviewid} </div>
  )
}
