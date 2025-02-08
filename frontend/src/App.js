import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [dados, setDados] = useState([]);

  const buscarDados = async () => {
    try {
      const response = await axios.get("http://localhost:5000/dados");
      setDados(response.data);
    } catch (error) {
      console.error(`Erro ao buscar dados: ${error}`);
    }
  };

  useEffect(() => {
    buscarDados(); // Buscar dados quando o componente for montado
  }, []);

  return (
    <div className="App">
      <h1>Dados guardados no firebase</h1>
      <ul>
        {dados.map(dado => (
          <li key={dado.id}>{dado.nome} - {dado.idade}</li>
        ))}
      </ul>
      <button onClick={buscarDados}>Buscar dados</button>
    </div>
  );
}

export default App;
