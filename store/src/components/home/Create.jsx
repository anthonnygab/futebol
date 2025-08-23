import React, { useState } from 'react';
import shirtData from '../../data/shirt.json';
import './../../styles/Create.css';

function Create() {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedShirt, setSelectedShirt] = useState(null);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [size, setSize] = useState('');

  const handleTeamSelect = (teamName) => {
    const team = shirtData.find(t => t.team === teamName);
    setSelectedTeam(team);
    setSelectedShirt(null);
  };

  const handleShirtSelect = (shirt) => {
    setSelectedShirt(shirt);
  };

  return (
    <div className="create-container">
      <div className="left-panel">
        {selectedShirt ? (
          <div className="shirt-preview">
            <img src={selectedShirt.image} alt="Camisa Selecionada" />
            <div className="shirt-overlay">
              <div className="shirt-name">{name || 'SEU NOME'}</div>
              <div className="shirt-number">{number || '00'}</div>
            </div>
          </div>
        ) : (
          <p>Escolha um time e uma camisa.</p>
        )}
      </div>

      <div className="right-panel">
        <h2>Personalize sua camisa</h2>

        {/* Escolher o time */}
        <div className="team-selection">
          <p>Escolha o time:</p>
          <div className="badges">
            {shirtData.map((team) => (
              <img
                key={team.team}
                src={team.badge}
                alt={team.team}
                onClick={() => handleTeamSelect(team.team)}
                className={`badge ${selectedTeam?.team === team.team ? 'selected' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* Camisas do time selecionado */}
        {selectedTeam && (
          <div className="shirt-selection">
            <p>Escolha a camisa:</p>
            <div className="shirts">
              {selectedTeam.shirts.map((shirt) => (
                <img
                  key={shirt.id}
                  src={shirt.image}
                  alt={shirt.name}
                  onClick={() => handleShirtSelect(shirt)}
                  className={`shirt-thumb ${selectedShirt?.id === shirt.id ? 'selected' : ''}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Inputs de nome, número e tamanho */}
        <div className="form-fields">
          <label>
            Nome:
            <input
              type="text"
              maxLength={20}
              value={name}
              onChange={(e) => setName(e.target.value.toUpperCase())}
            />
          </label>

          <label>
            Número:
            <input
              type="number"
              min="0"
              max="99"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </label>

          <label>
            Tamanho:
            <select value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="">Selecione</option>
              <option value="P">P</option>
              <option value="M">M</option>
              <option value="G">G</option>
              <option value="GG">GG</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}


export default Create;
