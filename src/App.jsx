import { Outlet } from "react-router-dom";
import "./styles/app.css";

function App() {
    return (
        <div className="App">
            <Outlet />
        </div>
    );
}   

export default App;
