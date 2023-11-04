import styles from "./mnplay.module.css"
import setaesq from "../../assets/Vector.svg"
import setadir from "../../assets/Vector (1).svg"
import tod from "../../assets/image12.svg"

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
    <div className={styles.showall}>
      <h4>Mostrar tudo</h4>
    </div>
    <div className={styles.msicall}>
    <div className={styles.musicCard}>
      <img src={tod} alt="as melhores de hj" />
      <h3>Today Top Hits</h3>
      <h5>Taylor Swift on top of hottest 50!
      </h5>
    </div>


    <div className={styles.musicCard1}>
      <img src={tod} alt="trocar a imagem" />
      <h3>TITLE</h3>
      <h5>text
      </h5>
    </div>



    <div className={styles.musicCard2}>
      <img src={tod} alt="trocar a imagem" />
      <h3>TITLE</h3>
      <h5>text
      </h5>
    </div>


  <div className={styles.musicCard3}>
      <img src={tod} alt="trocar a imagem" />
      <h3>TITLE</h3>
      <h5>text
      </h5>
    </div>

  <div className={styles.musicCard4}>
      <img src={tod} alt="trocar a imagem" />
      <h3>TITLE</h3>
      <h5>text
      </h5>
    </div>

    <div className={styles.musicCard5}>
      <img src={tod} alt="trocar a imagem" />
      <h3>TITLE</h3>
      <h5>text
      </h5>
    </div>
    </div>
  </div>
    </div>
  )
}

export default Menu