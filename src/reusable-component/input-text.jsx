import classes from './input-text.module.scss'

function InputText (props) {
    return (
        <>
        <div className={classes['input-section']}>
            <label htmlFor="email" className={classes.label}>{props.label}</label>
            <input
                id={props.name}
                className={classes.input}
                type={props.type}
                name={props.name}
                onChange={props.onInputChange}
                required={props.required}
            />
        </div>
        </>
    )
}

export default InputText;