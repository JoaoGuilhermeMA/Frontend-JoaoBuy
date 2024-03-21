import Styles from './styles/paginaInicial.module.css'

function Container(props) {
    return (
        <div>
            <div className={`${Styles.container} ${Styles[props.customClass]}`}>
                {props.children}
            </div>
        </div>
    );
}

export default Container;
