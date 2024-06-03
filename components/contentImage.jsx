import Image from 'next/image'
import styles from './contentImage.module.css'

export default function ContentImage(props) {
    return (
        <Image src={props.source} alt={props.alt} width={1200} height={props.height} className={styles.contentImage} priority={true} placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP891h+PwAHqALBfgtcWwAAAABJRU5ErkJggg=='/>
    )
}