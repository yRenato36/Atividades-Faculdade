import style from "./CustomInput.module.css"

function CustomInput ({ placeholder }) {
    return (
        <input className={ style.customInput } placeholder={ placeholder }></input>
    )
}

export default CustomInput