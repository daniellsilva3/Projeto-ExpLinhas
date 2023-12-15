import React from 'react';

function LinhasExpressas({ linhas }) {
  return (
    <div>
      <h2>Lista de Linhas</h2>
      <ul>
        {linhas && linhas.map((linha) => (
          <li key={linha && linha.id}>
            {linha && linha.NumerodaLinha} - {linha && linha.Nomeclatura}
          </li>
        ))}
      </ul>
    </div>
  );
}





  
  




export default LinhasExpressas;