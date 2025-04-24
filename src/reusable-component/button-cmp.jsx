import classes from './button-cmp.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

function ButtonCmp ({custClass, text, iconClass}) {
    return (
        <>
        <button className={classes[custClass]}>
            <i className={iconClass}></i>{text}
        </button>
        </>
    )
}

export default ButtonCmp;