import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment, decrement, login } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <h3>カウント：{counter}</h3>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <h3>{isLogin ? "ログインに成功" : "ログインしてください"}</h3>
      <button onClick={handleLogin}>ログインorログアウト</button>
    </div>
  );
}

export default App;
