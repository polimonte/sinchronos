import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {

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
            <div >
                <TextField
                    required
                    label="Nome Completo"
                    placeholder="Nome Completo"
                    {...register('nome')}
                />
            </div>
            <div>
                <TextField
                    required
                    id="standard-error-helper-text"
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
                    helperText="Senha deve possuir no mínimo 8 caracteres"
                    {...register('password')}
                />
            </div>
            <div>
                <Button variant="contained" type="submit" onClick={() => navigate("/login")}>Cadastrar</Button>
            </div>
        </Box >
    );
}

