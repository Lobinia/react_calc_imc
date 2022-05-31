import { useState } from "react";
import styles from "./App.module.css";
import { Button, TextField } from "@mui/material";
import { levels, calculateImc } from "./helpers/imc";

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
    }
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          Powered by <a href="www.github.com/lobinia">Lobinia</a>
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
          <form>
            <TextField
              fullWidth
              required
              label="Digite sua altura. (metros)"
              variant="outlined"
              type="number"
              margin="normal"
              value={heightField > 0 ? heightField : ""}
              onChange={(e) => setHeightField(parseFloat(e.target.value))}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />
            <TextField
              fullWidth
              required
              label="Digite seu peso. (kg)"
              variant="outlined"
              type="number"
              margin="normal"
              value={weightField > 0 ? weightField : ""}
              onChange={(e) => setWeightField(parseFloat(e.target.value))}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />
            <Button
              sx={{
                background: "#227C9D",
                color: "#FFF",
                width: "100%",
              }}
              size="large"
              variant="contained"
              onClick={handleCalculateButton}
            >
              Calcular
            </Button>
          </form>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
              {levels.map((item,key) => (
                <div key={key}>{item.title}</div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
