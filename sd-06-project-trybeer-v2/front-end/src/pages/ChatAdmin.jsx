import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import MenuTopAdmin from '../components/MenuTopAdmin';
import '../styles/adminOrders.css';

export default function ChatAdmin() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    api.fetchAllChat().then((res) => {
      if (res !== null && res.length > 0) {
        setMessages(res);
      }
    });
  }, []);

  const noMessage = () => {
    if (messages.length === 0) {
      return <p data-testid="text-for-no-conversation">Nenhuma conversa por aqui</p>;
    }
  };

  return (
    <div className="main-container-adm">
      <div className="menu-top-adm">
        <MenuTopAdmin />
      </div>
      <div className="page-body-adm">
        <div className="page-title-adm">
          <h1>Histórico Chat</h1>
        </div>
        <div className="main-page-adm">
          {messages && messages.map((chat) => (
            <div data-testid="containerChat" key={ chat.email }>
              <Link to="/admin/chat">
                <div className="cada-venda-adm">
                  <div className="venda-adm">
                    <h3 data-testid="profile-name">{chat.email}</h3>
                    <p data-testid="last-message">
                      Última mensagem às
                      {chat.messageDetails[chat.messageDetails.length - 1].time}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          { noMessage() }
        </div>
      </div>
    </div>
  );
}
