import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";



function App() {
  return (
      <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route path="/" component={Home}/>
          </Switch>
        </ Router>
      </div>
  );
}

export default App;
