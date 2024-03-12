// frontend/src/components/ListaAgendamentos.js
import React, { useState } from 'react';
import { BsCalendar, BsPerson, BsGear, BsTrash, BsPencil } from 'react-icons/bs';

const ListaAgendamentos = ({ agendamentos, atualizarAgendamentos }) => {
    const [nomeClienteEditado, setNomeClienteEditado] = useState('');
    const [dataEditada, setDataEditada] = useState('');
    const [servicoEditado, setServicoEditado] = useState('');
    const [idAgendamentoEditado, setIdAgendamentoEditado] = useState('');

    const handleExcluirAgendamento = async (id) => {
        try {
            // Enviar pedido de exclusão para o backend
            const response = await fetch(`http://localhost:5000/api/agendamentos/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log('Agendamento excluído com sucesso!');
                // Atualizar a lista de agendamentos após a exclusão
                atualizarAgendamentos();
            } else {
                console.error('Erro ao excluir agendamento.');
            }
        } catch (error) {
            console.error('Erro ao enviar pedido de exclusão para o backend:', error);
        }
    };

    const handleEditarAgendamento = (agendamento) => {
        setNomeClienteEditado(agendamento.nomeCliente);
        setDataEditada(agendamento.data);
        setServicoEditado(agendamento.servico);
        setIdAgendamentoEditado(agendamento._id);
    };

    const handleCancelarEdicao = () => {
        setNomeClienteEditado('');
        setDataEditada('');
        setServicoEditado('');
        setIdAgendamentoEditado('');
    };

    const handleSalvarEdicao = async () => {
        try {
            // Enviar dados atualizados para o backend
            const response = await fetch(`http://localhost:5000/api/agendamentos/${idAgendamentoEditado}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nomeCliente: nomeClienteEditado,
                    data: dataEditada,
                    servico: servicoEditado,
                }),
            });

            if (response.ok) {
                console.log('Agendamento atualizado com sucesso!');
                // Atualizar a lista de agendamentos após a atualização
                atualizarAgendamentos();
                // Limpar os campos de edição
                handleCancelarEdicao();
            } else {
                console.error('Erro ao atualizar agendamento.');
            }
        } catch (error) {
            console.error('Erro ao enviar dados atualizados para o backend:', error);
        }
    };

    return (
        <div>
            <h2>Lista de Agendamentos <BsCalendar /></h2>
            <ul>
                {agendamentos.map((agendamento) => (
                    <li key={agendamento._id}>
                        {idAgendamentoEditado === agendamento._id ? (
                            <div>
                                <input
                                    type="text"
                                    value={nomeClienteEditado}
                                    onChange={(e) => setNomeClienteEditado(e.target.value)}
                                />
                                <input
                                    type="date"
                                    value={dataEditada}
                                    onChange={(e) => setDataEditada(e.target.value)}
                                />
                                <input
                                    type="text"
                                    value={servicoEditado}
                                    onChange={(e) => setServicoEditado(e.target.value)}
                                />
                                <button onClick={handleSalvarEdicao}>Salvar</button>
                                <button onClick={handleCancelarEdicao}>Cancelar</button>
                            </div>
                        ) : (
                            <div>
                                <strong><BsPerson /> {agendamento.nomeCliente}</strong> - <BsGear /> {agendamento.servico} em {agendamento.data}
                                <button onClick={() => handleExcluirAgendamento(agendamento._id)}><BsTrash /></button>
                                <button onClick={() => handleEditarAgendamento(agendamento)}><BsPencil /></button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaAgendamentos;
