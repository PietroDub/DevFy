import styles from "./nav.module.css"
import logob from "../../assets/logobranca.svg"
import casa from "../../assets/house.svg"
import lupa from "../../assets/search.svg"
import bibi from "../../assets/bibi.png"
import plus from "../../assets/mais.svg"


const Nav = () => {
  return (
    <div className={styles.inicio}>
        <div className={styles.start}>
        <div className={styles.logobr}><img src={logob} alt="Logo branca" />
     <p>  spotfy </p></div>

    <div className={styles.casa}><img src={casa} alt="Logo branca" />
    <h3> ínicio </h3></div> 
     
    <div className={styles.lupa}><img src={lupa} alt="Logo branca" />
     <h3> buscar </h3></div> 
     </div>
     <div className={styles.biblioteca}>
        <div className={styles.first}>
        <div className={styles.aba}> <img src={bibi} alt="biblioteca" />
        <h3>Sua Biblioteca</h3>
        </div>
        
        <div className={styles.more}>
        <img src={plus} alt="mais" />
        </div>
            </div>
            </div>
        </div>
      )

      
}

export default Nav
