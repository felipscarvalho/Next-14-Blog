import styles from "./footer.module.css"

export default function Footer() {
    return(
        <footer className={ styles.container }>
            <div className={ styles.logo }>Logo</div>
            <div className={ styles.text }>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
        </footer>
    )
}