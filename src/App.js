import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";

function App() {
    useEffect(() => {
    const timeout = setTimeout(() => {
      // 👇️ redirects to an external URL
      window.location.replace('https://www.linkedin.com/in/romangino');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return <>Will redirect in 3 seconds...</>;
}

export default App
