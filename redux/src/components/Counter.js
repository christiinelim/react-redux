import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount, incrementAsync } from "../state/counter/counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <h2>{count}</h2>
            <button onClick={() => dispatch(incrementAsync(10))}>Increase</button>
            <button onClick={() => dispatch(decrement())}>Decrease</button>
        </>
    )
}

export default Counter