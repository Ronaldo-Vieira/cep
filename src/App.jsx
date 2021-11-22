import React, { useEffect, useState } from 'react';
import api from "./api"
import './App.css';

function App() {
  const [cepi, setCep] = useState()
  const [dados, setDados] = useState();
  useEffect(() => {
    api.get(`${cepi}/json`).then((response) => {
      setDados(response.data)
    })
  })
  function pegaCep(passa) {
    setCep(passa)
  }
  return (
    <div className="App">
      <h1>Buscador de cep</h1>
      <br />
      <input type="text" id="clientCep" />
      <button onClick={() => {
        pegaCep(document.getElementById("clientCep").value)
      }}> Enviar </button>
      <br />
      <div id="container">
        <h2>
          Cep: {dados?.cep}
        </h2>

        <div className="cssCep">
          Logradouro: {dados?.logradouro}
          <br />
          Cep: {dados?.cep}
          <br />
          Bairro: {dados?.bairro}

        </div>
        <div className="cssCep">
          Cidade: {dados?.localidade}
          <br />
          UF: {dados?.cud}
          <br />
          Código DDD: {dados?.ddd}
        </div>
      </div>
    </div>
  );
}

export default App;
