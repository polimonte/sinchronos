import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <div className='home-header'>
                <h1>A tecnologia que </h1>
                <h1>descomplica o </h1>
                <h1>seu dia a dia.</h1>
                <h2>Controle de ponto que otimiza o seu tempo</h2>
            </div>
            <div className="button-home">
                <Button variant="contained" onClick={() => navigate("/login")}>Login</Button>
                <Button variant="contained" onClick={() => navigate("/cadastro")}>Cadastro</Button>
            </div>
        </div>
    );
}