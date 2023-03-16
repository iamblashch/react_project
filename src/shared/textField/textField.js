import Style from "./text-field.module.scss";

const TextField = ({label, ...props}) => {
    return (
        // <div  className={Style.inputContainer}>
        //     <label>{label}</label>
        //     <input className={styles.field} {...props} />
        // </div>
        <div  className={Style.inputContainer}>
        <input {...props}/>
        <label className={Style.label}>{label}</label>
        <div className={Style.underline}></div>
      </div>
    )
}

export default TextField;
