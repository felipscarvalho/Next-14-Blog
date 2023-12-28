import styles from "./contact.module.css"
import Image from "next/image"

export default function ContactPage() {
    return(
        <div className={ styles.container }>
            <div className={ styles.imgContainer }>
                <Image src={"/contact.png"} alt="" fill className={ styles.image }></Image>
            </div>
            <div className={ styles.formContainer }>
                <form action="" className={ styles.form }>
                    <input type="text" placeholder="Name and Surname" />
                    <input type="text" placeholder="Email Address" />
                    <input type="text" placeholder="Phone Number" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="message"></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}