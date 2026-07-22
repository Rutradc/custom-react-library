import React from 'react';
import { Button } from './components';
import { Modal } from './components';

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


      <h2>Test de ma modal</h2>


      <Modal
        title="Petite modal"
        size="small"
        trigger={<Button 
        label="petite modal"
        primary
        />
        }
      >
        <p>Contenu</p>
      </Modal>
      

      <Modal
        title="Moyenne modal"
        size="medium"
        trigger={<Button 
        label="moyenne modal"
        primary
        />
        }
      >
        <p>Contenu</p>
      </Modal>
      


      <Modal
        title="Grande modal"
        size="large"
        trigger={<Button 
        label="grande modal"
        primary
        />
        }
      >
        <p>Contenu</p>
      </Modal>

      <Modal
        title="Supprimer un élément"
        trigger={<Button 
        label="Supprimer un élément"
        primary
        />
        }
        size="small"
        showActions={true}
        confirmText="Supprimer"
        cancelText="Annuler"
        onConfirm={() => {
          console.log('Élément supprimé');
        }}
      >
        <p>
          Êtes-vous sûr de vouloir supprimer cet élément ?
        </p>
      </Modal>
            


    </div>

  );
}

export default App;