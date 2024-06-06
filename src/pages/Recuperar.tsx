import { Button, TextField } from "@mui/material";
import './Recuperar.css';

const Recuperar = () => {
  return (
    <div className="form-container-recuperar">
      <div>
      <h2>Esqueci a senha</h2>
      <p>Enviaremos um e-mail com instruções de como redefinir sua senha.</p>
      </div>
        <TextField
          type="email"
          placeholder="nome@example.com"
          className='white input recuperar'

          
        />
      <div>
        <Button variant="contained" type="submit" >Enviar</Button>
      </div>
    </div>
  )
}

export default Recuperar