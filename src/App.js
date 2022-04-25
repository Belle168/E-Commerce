import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { AllProducts } from "./components/Products/AllProducts";
import { SingleProduct } from "./components/SingleProduct/SingleProduct";
import { Cart } from "./components/Cart/Cart";
import { Error } from "./components/Error/Error";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />
        <Switch>
          <Route exact path="/" component={AllProducts} />
          <Route exact path="/products" component={AllProducts} />
          <Route exact path="/products/:id" component={SingleProduct} />
          <Route exact path="/cart" component={Cart} />
          <Route path="*" component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
