import React, { useState } from 'react'
import { Image } from './Image_data'
import "./tp2.css"
export default function Tp2_react() {
    const [data,setdata]=useState(Image)
    const [counts,setcount]=useState(0)

    const add=()=>{
        if (counts<data.length-1) {
            setcount(counts+ +1)
        }
    }
    
    const sup=()=>{
        if (counts>0) {
            setcount(counts-1)
        }
    }
  return (
    <div className='d-flex justify-content-center pt-4'>
        <div className='card w-75 h-100 text-center bg-dark'>
            <div className='card-title'>
                <h1 className='title'>TP2_REACT</h1>
                <center><h3 id='count'>{counts}</h3></center>
            </div>
            <div className='card-body d-flex justify-content-between'>
                
                
                <input type="button" className='button   btn btn-dark bg-danger btn-lg w-50 mx-3' onClick={add} value="<" />
                <img src={data[counts].img} className='w-75 h-100' id='image' alt="" />
                <input type="button" className='button   btn btn-dark bg-danger btn-lg w-50 mx-3' onClick={sup} value=">" />
            </div>
        </div>
    </div>
  )
}
