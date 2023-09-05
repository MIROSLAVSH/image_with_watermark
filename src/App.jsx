import { useState } from 'react'
import ImageUploader from './components/ImageUploader'
import WatermarkSelector from './components/WatermarkSelector'
import Preview from './components/Preview'
import ExportButton from './components/ExportButton'

const App = () => {
 const [image, setImage] = useState(null)
 const [watermark, setWatermark] = useState(null)
 const [watermarkSettings, setWatermarkSettings] = useState({
  size: 50,
  opacity: 0.5,
  positionX: 50,
  positionY: 50,
 })

 const handleImageUpload = (file) => {
  setImage(file)
 }

 const handleWatermarkSelect = (file) => {
  setWatermark(file)
 }

 const handleWatermarkSettingsChange = (name, value) => {
  setWatermarkSettings({ ...watermarkSettings, [name]: value })
 }

 return (
  <div
   style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   }}
  >
   <h1>Image Watermarking App</h1>
   <ImageUploader onImageUpload={handleImageUpload} />
   <WatermarkSelector
    onWatermarkSelect={handleWatermarkSelect}
    onWatermarkSettingsChange={handleWatermarkSettingsChange}
   />
   {image && (
    <Preview
     image={image}
     watermark={watermark}
     watermarkSettings={watermarkSettings}
    />
   )}
   {image && watermark && (
    <ExportButton
     image={image}
     watermark={watermark}
     watermarkSettings={watermarkSettings}
    />
   )}
  </div>
 )
}

export default App
