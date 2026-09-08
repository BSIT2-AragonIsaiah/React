import { useState } from "react";

function ActivityCounter() {
    const [count, setCount] = useState(0);

    return (
            <div>
                <p>Completed Activities: {count}</p>

                <button onClick={() => setCount(count + 1)}>
                    +
                </button>
                { count > 0 ?
                <button onClick={() => setCount(count - 1)}>
                    -
                </button> : <button disabled="disabled"> - </button>
                }
                <button onClick={() => setCount(0)}>
                    Reset
                </button>
            </div>
        );
    }
export default ActivityCounter;