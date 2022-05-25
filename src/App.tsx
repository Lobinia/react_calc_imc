import { useState } from "react";
import styles from "./App.module.css";
import poweredImage from "./assets/powered.png";

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="Powered by B7Web" width={150} />
        </div>
      </header>
      <div className={styles.container}>
      <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </p>
          <input
          type="number"
          placeholder="Digite sua altura. Ex: 1.5 (em metros)"
          value={heightField > 0 ? heightField : ''}
          onChange={e => setHeightField(parseFloat(e.target.value))}
          />
          <input
          type="number"
          placeholder="Digite seu peso. Ex: 52.5 (em kilogramas)"
          value={weightField > 0 ? weightField : ''}
          onChange={e => setWeightField(parseFloat(e.target.value))}
          />
        </div>
        <div className={styles.rightSide}>...2</div>
      </div>
      
    </div>
  );
};

export default App;
