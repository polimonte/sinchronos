import { Button, Menu, MenuItem } from '@mui/material';
import { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImage from '../assets/bannerhome.png';

export default function Home() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Abrir menu
            </Button>
            <Menu
                style={{ position: 'absolute', top: '50px', left: '50px' }}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => { handleClose(); navigate("/login"); }}>Login</MenuItem>
                <MenuItem onClick={() => { handleClose(); navigate("/cadastro"); }}>Cadastro</MenuItem>
                <MenuItem onClick={() => { handleClose(); navigate("/Confirmação"); }}>Confirmação</MenuItem>
                <MenuItem onClick={() => { handleClose(); navigate("/Justificativa"); }}>Justificativa</MenuItem>
            </Menu>
            <img src={bannerImage} alt="Banner" style={{ position: 'relative', bottom: 0, left: 0, width: '100%', maxHeight: '80vh', marginTop: '20px' }} />
        </div>
    );
}
