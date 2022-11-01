import './App.css';
import ItemDetails from './Components/ItemDetails';

function App() {
  const itemList = [
    {id: 1, brand: "Renault", model: "Koleos", manufacturing: "Argentina", year: 2022},
    {id: 2, brand: "Fiat", model: "Fastback", manufacturing: "Brasil", year: 2022},
    {id: 3, brand: "Chevrolet", model: "Tracker", manufacturing: "Argentina",year: 2022}
  ]

  return (
    <div className="App">
      <h1 className="title">Show Room de Carros</h1>
      <div className="item-container">
        {itemList.map((item) => (
          <ItemDetails item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
