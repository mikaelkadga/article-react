import { useState } from "react"

const Tambah2 = () => {
    const [count, setCount] = useState(0)

    return (
        <div style={{border: "1px solid black", padding: "10px", margin: "5px"}}>
            <div>Tambah</div>
            <div>{count}</div>
            <button onClick={() => {
                setCount(count + 1)
            }}>
                Tambah
            </button>
            <button onClick={() => {
                if(count > 0) {
                    setCount(count - 1)
                }
            }}>
                Kurang
            </button>
        </div>
    )
} 

export default Tambah2