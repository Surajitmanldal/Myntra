import style from './Loading.module.css';
const LoadingSpin = () => {
    return (
        <div className={style.outer}>
            <div className={style.inner}></div>
        </div>
    )
}
export default LoadingSpin;