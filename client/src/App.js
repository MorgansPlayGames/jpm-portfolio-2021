import "./App.css";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Hobbies from "./pages/Hobbies";
import History from "./pages/History";
import Projects from "./pages/Projects";
import Header from "./components/Header";

function App() {
  return (
    <div className="App bg-gray-900 text-gray-200">
      <Router>
        <Header />
        <div className="container">
          <Navbar />
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/hobbies" component={Hobbies} />
            <Route exact path="/history" component={History} />
            <Route exact path="/projects" component={Projects} />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
