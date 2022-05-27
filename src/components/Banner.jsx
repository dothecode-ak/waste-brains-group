import React from 'react'
import { imgUrl } from '../data'
function Banner() {
  console.log(imgUrl);
  return (
    <>
<div className='banner-container'><img src={imgUrl[0].banner1} alt="" /></div>
    </>
  )
}

export default Banner