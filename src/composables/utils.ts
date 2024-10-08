import LogoProps from "../types/Logo";

const getCoordinates = (e: React.MouseEvent<HTMLDivElement>): { x: number, y: number } => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left - 20;
  const y = e.clientY - rect.top - 20;
  return { x, y };
}

const addLogo = (setLogos: React.Dispatch<React.SetStateAction<LogoProps[]>>, logos: LogoProps[], x: number, y: number) => {
  setLogos([...logos, { x, y }]);
}

const getInputValueWithVanillaJs = (id: string) => {
  if (document.readyState === 'complete') {
    return (document.getElementById(id) as HTMLInputElement).value
  }
}

export { getCoordinates, addLogo, getInputValueWithVanillaJs }