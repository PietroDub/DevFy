import styles from "./mnplay.module.css"
import setaesq from "../../assets/Vector.svg"
import setadir from "../../assets/Vector (1).svg"


const Menu = () => {
  return (
    <div className={styles.playlistmaster}>
       <div className={styles.setinhas}>
      <div className={styles.setas}>
         <img src={setaesq} alt="left" />
       <img src={setadir} alt="rigth" />
       <div className={styles.logi}>
        
       </div>
       </div>
       </div>

    </div>
  )
}

export default Menu