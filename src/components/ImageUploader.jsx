import { useRef } from 'react'
import PropTypes from 'prop-types'

const ImageUploader = ({ onImageUpload }) => {
 const inputRef = useRef(null)

 const handleClick = () => {
  inputRef.current.click()
 }

 const handleImageUpload = (event) => {
  const file = event.target.files[0]
  onImageUpload(file)
 }

 return (
  <div>
   <input
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
    ref={inputRef}
    style={{ display: 'none' }}
   />
   <button onClick={handleClick}>Upload Image</button>
  </div>
 )
}

ImageUploader.propTypes = {
 onImageUpload: PropTypes.func.isRequired,
}

export default ImageUploader
