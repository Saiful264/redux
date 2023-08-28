import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux/featuchers/counter/counterSlich";


const Counter = () => {
    const {count} = useSelector((state) => state.counter)
    const dispatch = useDispatch();
    return (
        <div className="text-center">
            <button className="btn btn-info" onClick={() => dispatch(incrementByValue(5))}>Increment By 5</button>
            <br />
            <button className="btn btn-success" onClick={() => dispatch(increment())}>Increment</button>
            <div>
                <h1>{count}</h1>
            </div>
            <button className="btn btn-active btn-secondary" onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    );
};

export default Counter;