import reactLogo from '../assets/react.svg'
import LogoProps from '../types/Logo'



const ALogo = ({ logoProps }: { logoProps: LogoProps }) => {
  console.log("🚀 ~ ALogo ~ logoProps:", logoProps)
  const style: React.CSSProperties = {
    position: 'absolute',
    left: `${logoProps.x}px`,
    top: `${logoProps.y}px`
  };
  return (
    <>
      <img src={reactLogo} alt="" style={style} />
    </>
  )
}

export default ALogo
