import React from 'react'

const CopyBtn = () => {
  return (
    <div>CopyBtn</div>
  )
}

export default CopyBtn


 /*  function writeToCanvas(src) {
    return new Promise((res) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')
      const img = new Image();
      img.src = src;

      img.onload = () => {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.drawImage(img, 0,0);
        canvas.toBlob((blob) =>{
          res(blob);
        }, 'image/png' )
      }
    })
  } */