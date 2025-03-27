import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [limit, setLimit] = useState(10);

    const handleIncrease = () => {
        setCount((prev) => (prev === limit ? limit : prev + 1));
    };

    const handleDecrease = () => {
        setCount((prev) => (prev === 0 ? 0 : prev - 1));
    };

    const handleReset = () => {
        setCount(0);
    };

    const handleLimitChange = (e) => {
        const limitInput = Number(e.target.value);
        setLimit(limitInput);
    };

    return (
        <div className="container">
            <div className="app">
                <h1 className="">Click Counter App</h1>

                <div className="counter-display">
                    <p className="count">{count}</p>

                    {count >= limit && (
                        <p className="limit-msg">You've reached the limit!</p>
                    )}
                </div>

                <div className="buttons">
                    <button
                        className="decrement-btn"
                        onClick={handleDecrease}
                        disabled={count === 0}
                    >
                        -
                    </button>
                    <button onClick={handleReset} disabled={count === 0}>
                        Reset
                    </button>
                    <button
                        className="increment-btn"
                        onClick={handleIncrease}
                        disabled={count >= limit}
                    >
                        +
                    </button>
                </div>

                <div className="limit-input">
                    <label htmlFor="limit">Set Limit</label>
                    <input
                        type="number"
                        name="limit"
                        id="limit"
                        value={limit}
                        onChange={handleLimitChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
