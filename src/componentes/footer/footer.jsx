import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footermaster}>
    <h4>TESTAR O PREMIUM DE GRAÇA</h4>
    <h4>inscreva-se para curtir música ilimitada e podcasts só com alguns
      anúncios. Não precisa de cartão de crédito.
    </h4>
    <div className={styles.subgrat}>
      <button>inscreva-se grátis</button>
    </div>
    </div>
  )
}

export default Footer