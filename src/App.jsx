import {useDispatch, useSelector} from "react-redux";

const App = () => {
    const dispatch = useDispatch();
    const num = useSelector(state => state.num);

    const mega_plus = () => { dispatch({ type: "mega_plus" }); }
    const plus = () => { dispatch({ type: "plus" }); }
    const mega_minus = () => { dispatch({ type: "mega_minus" }); }
    const minus = () => { dispatch({ type: "minus" }); }
    const reset = () => { dispatch({ type: "reset" }); }

    return (
        <div>
            <p>{num}</p>
            <button onClick={plus}>+</button>
            <button onClick={mega_plus}>++</button>
            <button onClick={minus}>-</button>
            <button onClick={mega_minus}>--</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default App;

