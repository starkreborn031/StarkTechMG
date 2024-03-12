// frontend/src/components/AgendamentoForm.js
import React, { useState } from 'react';
import { BsCalendar } from 'react-icons/bs';
import firebase from '../firebase';

const AgendamentoForm = ({ atualizarAgendamentos }) => {
    const [nomeCliente, setNomeCliente] = useState('');
    const [data, setData] = useState('');
    const [servico, setServico] = useState('');

    const handleAutenticacao = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            await firebase.auth().signInWithPopup(provider);
            console.log('Usuário autenticado com sucesso!');
        } catch (error) {
            console.error('Erro ao autenticar usuário:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const user = firebase.auth().currentUser;
            if (!user) {
                console.log('Usuário não autenticado. Faça login para agendar um serviço.');
                return;
            }

            const response = await fetch('http://localhost:5000/api/agendamentos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${await user.getIdToken()}`,
                },
                body: JSON.stringify({
                    nomeCliente,
                    data,
                    servico,
                }),
            });

            if (response.ok) {
                console.log('Agendamento criado com sucesso!');
                atualizarAgendamentos();
                setNomeCliente('');
                setData('');
                setServico('');
            } else {
                console.error('Erro ao criar agendamento.');
            }
        } catch (error) {
            console.error('Erro ao enviar dados de agendamento para o backend:', error);
        }
    };

    return (
        <div>
            <h2>Agendar Serviço <BsCalendar /></h2>
            <button onClick={handleAutenticacao}>Autenticar com Google</button>
            <form onSubmit={handleSubmit}>
                {/* Restante do código... */}
            </form>
        </div>
    );
};

export default AgendamentoForm;
