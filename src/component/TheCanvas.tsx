import { useState } from 'react'
import '../style/TheCanvas.scss'
import ALogo from './ALogo'
import LogoProps from '../types/Logo'


const getCoordinates = (e: React.MouseEvent<HTMLDivElement>): { x: number, y: number } => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left - 20;
  const y = e.clientY - rect.top - 20;
  return { x, y };
}

const addLogo = (setLogos: React.Dispatch<React.SetStateAction<LogoProps[]>>, logos: LogoProps[], x: number, y: number) => {
  setLogos([...logos, { x, y }]);
}

const isAnyLogoPresent = (logos: LogoProps[], x: number, y: number): boolean => {
  return logos.some((logo) => Math.abs(logo.x - x) <= 20 && Math.abs(logo.y - y) <= 20)
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
    <div id="canva" onClick={handleMouseMove}>
      {logos.map((position) => <ALogo logoProps={position}></ALogo>)}
    </div>
  )
}

export default TheCanva
