import PropTypes from 'prop-types'

const Preview = ({ image, watermark, watermarkSettings }) => {
 const watermarkStyle = {
  position: 'absolute',
  width: `${watermarkSettings.size}%`,
  opacity: watermarkSettings.opacity,
  top: `${watermarkSettings.positionY}%`,
  left: `${watermarkSettings.positionX}%`,
  transform: 'translate(-50%, -50%)',
 }

 return (
  <div style={{ position: 'relative', marginBottom: '10px' }}>
   <img src={URL.createObjectURL(image)} alt="Original" />
   {watermark && (
    <img
     src={URL.createObjectURL(watermark)}
     alt="Watermark"
     style={{ ...watermarkStyle, objectFit: 'contain' }}
    />
   )}
  </div>
 )
}

Preview.propTypes = {
 image: PropTypes.object.isRequired,
 watermark: PropTypes.object,
 watermarkSettings: PropTypes.shape({
  size: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  positionX: PropTypes.number.isRequired,
  positionY: PropTypes.number.isRequired,
 }).isRequired,
}

export default Preview
