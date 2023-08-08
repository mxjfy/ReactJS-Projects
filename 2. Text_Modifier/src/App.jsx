import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import './components/styleComponent.css';
import { useState } from "react";
import Alert from "./components/Alert";
const App = () => {
    
    const [mode, setMode] = useState('light'); // Dark Mode
    const [alert, setAlert] = useState(null);


    const showAlert = (message, type) =>{
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }
    const toggleMode = () =>{
        if(mode == 'light'){
            setMode('dark');
            document.body.style.backgroundColor = '#182C61';
            document.body.style.color = 'white';
            showAlert("Dark Mode in Enabled", "success");
            // document.title = 'TextUtils - Dark Mode';
            
        }else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            showAlert("Light Mode in Enabled", "success");
            // document.title = 'TextUtils - Light Mode';
        }
    }
    
    
    return (
        <>
            <Navbar
                title="TextUtils"
                mode={mode}
                toggle={toggleMode}
            />
            <Alert 
                alert={alert}  
            />
            <div className="container">
                <TextForm 
                    heading="Enter The Text to Analyze..."
                    rows="8"
                    showAlert={showAlert}
                    />
            </div>
        </>
    )
}
export default App;