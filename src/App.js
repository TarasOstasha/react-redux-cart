import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./componets/Header";
import Main from "./pages//MainPage";

function App() {
  return (
    <main className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"><Main /></Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
