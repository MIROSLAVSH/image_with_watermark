import { useRef } from 'react'

import PropTypes from 'prop-types'

const WatermarkSelector = ({
 onWatermarkSelect,
 onWatermarkSettingsChange,
}) => {
 const watermarkUploadRef = useRef(null)

 const handleWatermarkImageUpload = (event) => {
  const file = event.target.files[0]
  onWatermarkSelect(file)
 }

 const handleSettingsChange = (name, value) => {
  onWatermarkSettingsChange(name, value)
 }

 return (
  <div
   style={{
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
   }}
  >
   <input
    type="file"
    accept="image/*"
    onChange={handleWatermarkImageUpload}
    ref={watermarkUploadRef}
    style={{ display: 'none' }}
   />
   <button onClick={() => watermarkUploadRef.current.click()}>
    Upload Watermark
   </button>
   <div>
    <label>Size:</label>
    <input
     type="range"
     min="1"
     max="100"
     name="size"
     onChange={(event) => handleSettingsChange('size', event.target.value)}
    />
   </div>
   <div>
    <label>Opacity:</label>
    <input
     type="range"
     min="0"
     max="1"
     step="0.1"
     name="opacity"
     onChange={(event) => handleSettingsChange('opacity', event.target.value)}
    />
   </div>
   <div>
    <label>Position X:</label>
    <input
     type="number"
     min="0"
     max="100"
     step="1"
     name="positionX"
     onChange={(event) => handleSettingsChange('positionX', event.target.value)}
    />
   </div>
   <div>
    <label>Position Y:</label>
    <input
     type="number"
     min="0"
     max="100"
     step="1"
     name="positionY"
     onChange={(event) => handleSettingsChange('positionY', event.target.value)}
    />
   </div>
  </div>
 )
}

WatermarkSelector.propTypes = {
 onWatermarkSelect: PropTypes.func.isRequired,
 onWatermarkSettingsChange: PropTypes.func.isRequired,
}

export default WatermarkSelector
