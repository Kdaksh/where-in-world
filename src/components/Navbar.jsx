import { useState } from "react"
import { Link } from "react-router-dom"
const Navbar = ()=>{
    const fetchTheme = ()=>{
        if (!localStorage.getItem('theme')) {
            localStorage.setItem('theme',JSON.stringify({mode:'dark',icon:'moon-fill'}))
            
        }
        return JSON.parse(localStorage.getItem('theme'))
    }
    const [ThemeData, setThemeData] = useState(fetchTheme())
    document.body.classList.value = ThemeData.mode

   
const toggleTheme = ()=>{
    let data = (ThemeData.mode == 'dark' && ThemeData.icon == 'moon-fill') ? {mode:'light',icon:'moon'} :{mode:'dark',icon:'moon-fill'}
    setThemeData(data)
    localStorage.setItem('theme',JSON.stringify(data))
    document.body.classList.value = ThemeData.mode
}

return <>

<div className="navbar">
    <div className="nav-wrapper">
        <div className="navbar-main">Where In The World?</div>
        <div className="navbar-theme"> <a  href="https://github.com/kdaksh" target="_blank"><i className="bi bi-github ico" style={{marginRight:'20px'}}></i></a> <i class={`bi bi-${ThemeData.icon} ico`} onClick={toggleTheme}></i></div>
    </div>
</div>
</>
}

export default Navbar