import { Component } from "react";

class Pendidikan extends Component  {
    render() {
        return (
            <div style={{border: "1px solid black", padding: "10px", margin: "5px"}}>
                <h5>ini class component</h5>
                <table>
                    <tbody>
                    <tr>
                        <td><b>SD</b></td>
                        <td>:</td>
                        <td>SD Sukma Jaya</td>
                    </tr>
                    <tr>
                        <td><b>SMP</b></td>
                        <td>:</td>
                        <td>SMPN 9</td>
                    </tr>
                    <tr>
                        <td><b>SMA</b></td>
                        <td>:</td>
                        <td>SMAN 6</td>
                    </tr>
                    </tbody>
                </table>
                <hr />
            </div>
        )
    }
}

export default Pendidikan