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
       </div>
       <div className={styles.logi}>

        <button>inscrever-se</button>
        </div>
        <div className={styles.join}>
        <button>Entrar</button>
          </div>
       </div>
  






  <div className={styles.showallmaster}>
    <h2>Playlists do Spotfy</h2>
  </div>
    </div>
  )
}

export default Menu