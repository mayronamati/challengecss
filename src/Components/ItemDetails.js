import styles from './ItemDetails.module.css'

const ItemDetails = ({item}) => {
  return (
    <div className={styles.card}>
        <h1>{item.brand}</h1>
        <p>Modelo: {item.model}</p>
        <p>Fabricante: {item.manufacturing}</p>
        <p>Ano: {item.year}</p>
    </div>
  )
}

export default ItemDetails