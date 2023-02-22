import { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "./App.css";
import { Basket } from "./components/basket/Basket";
import { Header } from "./components/header/Header";
import { Meals } from "./components/meals/Meals";
import { Summary } from "./components/summary/Summary";
import { Snackbar } from "./components/UI/Snackbar";
import { store } from "./store";
import { uiActions } from "./store/ui/uiSlice";

function AppContent() {
  const [isBasketVisible, setBasketVisible] = useState(false);
  const dispatch = useDispatch();
  const snackbar = useSelector((state) => state.ui.snackbar);
  const showBasketHandler = () => {
    setBasketVisible((prevState) => !prevState);
  };
  const closeSnackbarHandler = () => {
    dispatch(uiActions.closeSnackbar());
  };
  return (
    <div>
      <Header onShowBasket={showBasketHandler} />
      <Content>
        <Summary />
        <Snackbar
          onClose={closeSnackbarHandler}
          severity={snackbar.severity}
          isOpen={snackbar.isOpen}
          message={snackbar.message}
          autoHideDuration={5000}
        />
        <Meals />
        {isBasketVisible && <Basket onClose={showBasketHandler} />}
      </Content>
    </div>
  );
}
const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};
export default App;

const Content = styled.div``;
