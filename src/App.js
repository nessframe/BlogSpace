import "./styles/App.css"
import Routing from "./Routing/Routing";
import {AuthContext} from "./context/context";
import {useState} from "react";

function App() {

    const [isAuth, setAuth] = useState(false)
    return (
        <AuthContext.Provider value={{
            isAuth,
            setAuth,
        }}>
            <Routing />
        </AuthContext.Provider>
    );
}

export default App;