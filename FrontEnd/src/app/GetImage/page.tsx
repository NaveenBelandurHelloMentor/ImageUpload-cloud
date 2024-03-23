'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import NavBar from '../Component/NavBar/NavBar'


interface imagedisplay {
  id: String,
  image: String
}


const GetImage = () => {
  const [image, setImage] = useState<imagedisplay>([])

  useEffect(() => {
    fetch(`http://localhost:3060/getallimage`)
      .then((response: any) => {
        const data = response.json()
          .then((data: any) => {
            setImage(data)
          })
      })
  }, [])



  return (
    <>
      <NavBar />
      <section className='container mt-5'>
        <div className='row'>
          <div>
            <h3 className='text-center'>Image Display from Cloud</h3>
            {image?.GetAllImage == 0 ? <p>Loading....</p> : image?.GetAllImage?.map((data) => {
              return (
                <>
                  <div className="card mt-5" style={{ maxWidth: '100%' }} key={data.id}>
                    <img src={data.image} className="card-img-top" alt="random-text" />
                  </div>
                </>
              )
            }) }
          </div>
        </div>
      </section>
    </>
  )
}





export default GetImage