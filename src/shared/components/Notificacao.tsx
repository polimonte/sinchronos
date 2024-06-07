
import './Notificacao.css';

interface MyComponentProps {
    titulo: string; // Define nome prop as a string
    texto: string;
}

export default function ComponenteMenu(props: MyComponentProps) {

    return (
        <div className='notifi'>
            <div className='notificacao'>
                <div className='notificacao'>
                    <div className='titulo'>
                        <h2>{props.titulo}</h2>
                    </div>
                    <div className='texto'>
                        <h2>{props.texto}</h2>
                    </div>
                </div>
            </div>
        </div >
    )
}