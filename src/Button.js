import React ,{memo,useContext} from 'react'
import { ThemeContext } from './context';

const Button = memo(({ children }) => {
  const [themeValue,setTheme] = useContext(ThemeContext);
  const handleClick = () => {
    setTheme((prev)=>{
      return prev === 'dark' ? 'light' :'dark'
    })
  }
  return (
    <button onClick={handleClick}>{children}{themeValue}</button>
  )
})

export default Button