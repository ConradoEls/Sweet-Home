import { useState } from "react"

const useCount = (initial, minimo = 0) => {
    const[count,setCount] = useState(initial);

    const decrement = () => {
        if (count > minimo) setCount(count - 1);
    }

    const increment = () => {
        setCount(count + 1);
    }

    const reset = () => {
        setCount(initial);
    }

  return {count,decrement,increment,reset}
}

export default useCount