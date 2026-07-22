import React from 'react';
import { Button } from './components';
import './App.css'
import { Table } from './components'

function App() {

  const personnes = [
    { name: 'Arthur', age: 24, city: "Sombreffe"},
    { name: "Alice", age: 25, city: "Paris" },
    { name: "Bob", age: 30, city: "Londres" }
  ]
  return (
    <>
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

      <Table items={personnes}></Table>
    </>
  );
}

export default App
