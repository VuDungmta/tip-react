import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner, Button } from "react-bootstrap";
import './custom.scss';
function App() {
    const [loading, setLoading] = useState(false)
    const toggleLoader = () => {
      if(!loading){
        setLoading(true)
      }else{
        setLoading( false)
      }
   }
  return (
    <div className="container">
      <div className="btnContainer">
      {loading ? (
            <Spinner
              style={{ marginBottom: 27 }}
              animation="border"
              variant="danger"
            />
          ) : null}

          <Button
            onClick={() => toggleLoader()}
            variant={"primary"}
            size="lg"
          >
            {loading ? "Hide Loader" : "Show Loader"}
          </Button>
      </div>
    </div>
  );
}

export default App;
