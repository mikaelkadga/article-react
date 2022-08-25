import Button from "./Button";

const Biodata = () => {
    return (
    <div style={{border: "1px solid black", padding: "10px", margin: "5px"}}>
        <h5>ini functional component</h5>
        <table>
            <tbody>
            <tr>
                <td><b>Nama</b></td>
                <td>:</td>
                <td>Mikael</td>
            </tr>
            <tr>
                <td><b>Usia</b></td>
                <td>:</td>
                <td>24</td>
            </tr>
            </tbody>
        </table>
        <Button text={"klik"} color={"red"}/>
        <hr />
    </div>
    )    
}

export default Biodata;