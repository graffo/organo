import { useState } from "react"
import Botao from '../Botao/Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.scss'

const Formulario = (props) => {
    const times = [
        'Programação',
        'Front-End',
        'Data Sciene',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação  e Gestão'
    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label='Nome'
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} />
                <CampoTexto
                    label='Cargo'
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)} />
                <CampoTexto
                    label='Imagem'
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} />

                <ListaSuspensa
                    label='Time'
                    obrigatorio={true}
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario