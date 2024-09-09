import { useState } from 'react'
import '../style/TheCanvas.scss'
import ALogo from './ALogo'
import LogoProps from '../types/Logo'
import { addLogo, getCoordinates } from '../composables/utils'


const isAnyLogoPresent = (logos: LogoProps[], x: number, y: number): boolean => {
  return false
}

const TheCanva = () => {
  const [logos, setLogos] = useState<LogoProps[]>([])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {

    const { x, y } = getCoordinates(e);

    if (!isAnyLogoPresent(logos, x, y)) {
      addLogo(setLogos, logos, x, y);
    }
  }
  return (
    <div id="canva" onMouseMove={handleMouseMove}>
      {logos.map((position) => <ALogo logoProps={position}></ALogo>)}
    </div>
  )
}

export default TheCanva
