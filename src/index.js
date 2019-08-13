import React, { useState } from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import "./styles.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    padding: theme.spacing(2),
    margin: 2
  }
}));

export default function Calculator() {
  const classes = useStyles();
  const [count, setCount] = useState("");

  return (
    <div>
      <TextField
        id="standard-read-only-input"
        label="Resultado"
        className={classes.textField}
        margin="normal"
        value={count}
        InputProps={{
          readOnly: true
        }}
      />

      <Grid container direction="row" justify="center">
        <Grid item>
          <Grid item>
            <Button
              onClick={() => setCount(count + "7")}
              size="large"
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              7
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => setCount(count + "4")}
              size="large"
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              4
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => setCount(count + "1")}
              size="large"
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              1
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => setCount(count + "0")}
              size="large"
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              0
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item>
            <Button
              onClick={() => setCount(count + "8")}
              size="large"
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              8
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => setCount(count + "5")}
              size="large"
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              5
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => setCount(count + "2")}
              size="large"
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              2
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => setCount("")}
              size="large"
              variant="contained"
              color="inherit"
              className={classes.button}
            >
              AC
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item>
            <Button
              onClick={() => setCount(count + "9")}
              size="large"
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              9
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => setCount(count + "6")}
              size="large"
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              6
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => setCount(count + "3")}
              size="large"
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              3
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => setCount(eval(count))}
              size="large"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              =
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item>
            <Button
              onClick={() => setCount(count + "/")}
              size="large"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              /
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => setCount(count + "*")}
              size="large"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              *
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => setCount(count + "-")}
              size="large"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              -
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => setCount(count + "+")}
              size="large"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              +
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Calculadora</h1>
      <Calculator />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
