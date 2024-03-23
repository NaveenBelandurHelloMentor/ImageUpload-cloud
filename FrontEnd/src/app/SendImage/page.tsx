'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import NavBar from '../Component/NavBar/NavBar'



interface image_type {
  image: String
}


const SendImage = () => {
  const [image, setImage] = useState<image_type>('')
 

  const handleSubmit = (e:any) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('image', image);
    console.log(image, 'image')
    fetch('http://localhost:3060/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        alert('Image Saved Succesfully in cloud')
         window.location.href ='/GetImage'
      })
      .catch(error => {
        console.log('There was a problem with the fetch operation:', error);
      });
  }



  return (
    <>
    <NavBar/>
      <section>
        <div className='container mt-5'>
          <div className='row'>
            <div className="card">
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label text-center lead">Add Image To Cloud</label>
                  <input className="form-control" type="file" id="formFile" onChange={(e) => setImage(e.target.files[0])} />
                  <div className="d-grid gap-2 col-6 mx-auto">
                  <button className="btn btn-dark lead  mt-5" onClick={handleSubmit}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}




export default SendImage