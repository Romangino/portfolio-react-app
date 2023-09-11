import './App.css';
import {useEffect} from "react";

function App() {
    useEffect(() => {
    const timeout = setTimeout(() => {
      // 👇️ redirects to an external URL
      window.location.replace('https://www.linkedin.com/in/romangino');
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return <>Redirecting to LinkedIn...</>;
}

export default App
