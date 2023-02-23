import "./App.css";
import { Provider } from "react-redux";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Sidebar />
        <Main />
      </Provider>
    </div>
  );
}

export default App;
