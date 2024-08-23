import "./styles/App.css"
import Posts from "./routes/Posts";
import About from "./routes/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./routes/Root";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Error from "./routes/Error";

function App() {
    return (
        <>
            <BrowserRouter >
                <Navbar/>
                <div className="routWrapper">
                    <Routes>
                        <Route path="/" element={<Root />} />
                        <Route path="/posts" element={<Posts />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;