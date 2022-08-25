const Button = (props) => {
    const {text = "save", color="white"} = props
    return (
        <button 
        style={{
            background: "black",
            color: color,
            cursor: "pointer"
        }}>
            {text}
        </button>
    )
}

export default Button