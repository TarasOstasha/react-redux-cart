import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./componets/Header";
import Main from "./pages//MainPage";
import Cart from "./pages/CartPage";
import Favorite from "./pages/FavoritePage";

function App() {
  return (
    <main className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"><Main /></Route>
          <Route exact path="/cart"><Cart /></Route>
          <Route exact path="/favorite"><Favorite /></Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
