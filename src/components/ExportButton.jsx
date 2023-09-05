import PropTypes from 'prop-types'

const ExportButton = ({ image, watermark, watermarkSettings }) => {
 const handleExport = () => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const imageObj = new Image()
  const watermarkObj = new Image()

  imageObj.src = URL.createObjectURL(image)

  imageObj.onload = () => {
   canvas.width = imageObj.width
   canvas.height = imageObj.height
   ctx.drawImage(imageObj, 0, 0)

   watermarkObj.src = URL.createObjectURL(watermark)

   watermarkObj.onload = () => {
    const { opacity, positionX, positionY, size } = watermarkSettings
    const watermarkWidth = watermarkObj.width
    const watermarkHeight = watermarkObj.height
    const scaledWidth = (size / 100) * imageObj.width
    const scaledHeight = (watermarkHeight / watermarkWidth) * scaledWidth
    const x = (positionX / 100) * imageObj.width - scaledWidth / 2
    const y = (positionY / 100) * imageObj.height - scaledHeight / 2

    ctx.globalAlpha = opacity
    ctx.drawImage(watermarkObj, x, y, scaledWidth, scaledHeight)

    const link = document.createElement('a')
    link.href = canvas.toDataURL('image/jpeg')
    link.download = 'watermarked_image.jpg'
    link.click()
   }
  }
 }

 return (
  <div>
   <button onClick={handleExport}>Export</button>
  </div>
 )
}

ExportButton.propTypes = {
 image: PropTypes.object.isRequired,
 watermark: PropTypes.object.isRequired,
 watermarkSettings: PropTypes.shape({
  size: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  positionX: PropTypes.number.isRequired,
  positionY: PropTypes.number.isRequired,
 }).isRequired,
}

export default ExportButton
