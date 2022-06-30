import { Routes, Route } from "react-router-dom";
import MainPage from "../mainPage";
import DetailPage from "../mainPage/detail";
import BookingPage from "../mainPage/Booking";
import ContentPage from "../mainPage/Content";
import LoginPage from "../mainPage/Login";
import RegisterPage from "../mainPage/Register";
export default function RouterPage() {
    
    return (
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/detail" element ={<DetailPage/>}/>
            <Route path="/booking" element ={<BookingPage/>}/>
            <Route path="/content" element ={<ContentPage/>}/>
            <Route path="/login" element ={<LoginPage/>}/>
            <Route path="/register" element ={<RegisterPage/>}/>
        </Routes>
            
    )
}