import { useForm } from 'react-hook-form';
import '../App.css';
import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: unknown) => {
    console.log(data);
  }


  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
      className="form-container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <TextField
          required
          label="E-mail"
          placeholder="E-mail"
          {...register('e-mail')}
        />
      </div>
      <div>
        <TextField
          required
          id="password-input password"
          type="password"
          label="Senha"
          placeholder="Senha"
          {...register('password')}
        />
      </div>
      <div>
        <Button variant="contained" type="submit" onClick={() => navigate("/ponto")}>Entrar</Button>
      </div>

      <div>
        <p><a href="/recuperar-senha">Esqueci a senha</a></p>
        <p>Primeiro acesso?&nbsp;<a href="" onClick={() => navigate("/cadastro")}>Cadastre-se aqui</a></p>
      </div>
      
    </Box>


  );
}
