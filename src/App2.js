import { data } from "./data"
import { useState } from "react"
import Card1 from "./components/Card"

const App2 = () => { 
    const [dataList] = useState(data)

    const convertElipsisBody = (body) => {
        return body.length > 100 ? body.slice(0,100) + "..." : body
    }

    const convertElipsisTitle = (body) => {
        return body.length > 70 ? body.slice(0,70) + "..." : body
    }

    return (
        <div className="container">
            <h1 className="text-center mt-3">my blog</h1>
            <div className="row mt-5">
                {dataList.map((data, idx) => {
                    return (
                        <div className="col" key={idx}>
                            <Card1 title={convertElipsisTitle(data.title)} body={convertElipsisBody(data.body)} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default App2