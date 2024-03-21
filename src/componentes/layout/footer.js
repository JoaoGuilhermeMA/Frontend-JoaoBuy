import Styles from './styles/footer.module.css'

function Footer() {
    return (
        <footer className={Styles.footer}>
            <ul className={Styles.social_list}>
                <li>Facebook</li>
                <li>Youtube</li>
                <li>Instagram</li>
            </ul>
            <p className={Styles.copy_right}>
                <span>JoaoBuy</span> &copy; 2024
            </p>
        </footer >
    )
}

export default Footer;