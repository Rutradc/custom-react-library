import React from 'react';
import { Button } from './components';

function App() {
  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h2>Test de mes boutons</h2>

      <div>
        <Button 
          label="Bouton Primary" 
          onClick={() => alert('Cliqué sur Primary !')} 
        />
      </div>

      <div>
        <Button 
          variant="secondary" 
          label="Bouton Secondary" 
          onClick={() => console.log('Secondary cliqué')} 
        />
      </div>

      <div>
        <Button 
          variant="danger" 
          label="Supprimer" 
        />
      </div>

      <div>
        <Button 
          variant="primary" 
          label="Chargement en cours..." 
          isLoading={true} 
        />
      </div>

      <div>
        <Button 
          variant="primary" 
          label="Je suis désactivé" 
          disabled={true} 
        />
      </div>
    </div>
  );
}

export default App;