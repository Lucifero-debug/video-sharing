import styled, { ThemeProvider } from "styled-components"
import Menu from "./components/Menu"
import Navbar from "./components/Navbar"
import './Reset.css';
import { darkTheme,lightTheme } from "./utils/Theme";
import { useState,useEffect } from "react";
import { BrowserRouter,Routes,Route, Outlet } from "react-router-dom"
import Home from "./Pages/Home.jsx"
import Video from "./Pages/Video.jsx";
import Login from "./Pages/Login.jsx"
const Container=styled.div`
display:flex;
`

const Main=styled.div`
flex:7;
background-color:${({theme}) => theme.bg} ;
`
const Wrapper=styled.div`
padding: 22px 96px;
`;

function App() {
  const savedMode=localStorage.getItem("darkMode")==="true"
const [darkMode,setDarkMode] = useState(savedMode)

useEffect(()=>{
localStorage.setItem("darkMode",darkMode)
},[darkMode])

const toggleDarkMode = () => {
  setDarkMode((prevMode) => !prevMode);
};

useEffect(() => {
  localStorage.setItem("darkMode", JSON.stringify(darkMode));
});
 const [types,setTypes]=useState("")
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
    <BrowserRouter>
    <Menu darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    <Main>
     <Navbar/>
    <Wrapper>
     <Routes>
      <Route path="/" element={<Outlet/>}>
      <Route index element={<Home types={types} />} />
      <Route path="random" element={<Home types="random"/>}/>
      <Route path="trend" element={<Home types="trend"/>} />
      <Route path="subscriptions" element={<Home types="sub"/>}/>
      <Route path="signin" element={<Login/>}/>
      <Route path="video">
      <Route path=":id" element={<Video/>}/>
      </Route>  
        
      </Route>
     </Routes>
    </Wrapper>
    </Main>
    </BrowserRouter>
    </Container>
    </ThemeProvider>
  )
}

export default App
