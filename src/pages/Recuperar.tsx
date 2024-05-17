import { Button, TextField } from "@mui/material";
import '../App.css';

const Recuperar = () => {
  return (
    <div className="form-container">
      <div>
      <h2>Esqueci a senha</h2>
      <p>Enviaremos um e-mail com instruções de como redefinir sua senha.</p>
      </div>
      <div className="recuperar-senha">
        <TextField
          label="E-mail"
          type="email"
          placeholder="E-mail"
          
        />
      </div>
      <div>
        <Button variant="contained" type="submit" >Enviar</Button>
      </div>
    </div>
  )
}

export default Recuperar