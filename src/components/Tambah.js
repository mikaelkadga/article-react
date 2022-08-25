import { Component } from "react";

class Tambah extends Component {
    state =  {
        count: 0,
        background: "blue",
    }

    render() {
        return (
            <div style={{border: "1px solid black", padding: "10px", margin: "5px", background: `${this.state.background}` }}>
                <div className="text-danger">Tambah</div>
                <div>{this.state.count}</div>
                <button onClick={() => {
                    if(this.state.background === "blue") {
                        this.setState({background: "white"})
                    } else {
                        this.setState({background: "blue"})
                    }
                }}>
                    Ubah Warna
                </button>
                <button onClick={() => {
                    this.setState({count: this.state.count + 1})
                }}>
                    Tambah
                </button>
                <button onClick={() => {
                    if(this.state.count > 0) {
                        this.setState({count: this.state.count - 1})
                    }
                }}>
                    Kurang
                </button>
            </div>
        )
    }
}

export default Tambah