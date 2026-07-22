import './App.css'
import React from 'react';
import { useState } from 'react'
import { Button } from './components';
import { Checkbox } from './components'
import { SideBar } from './components'
import { navLinks } from './config/navLinks.js'
import { Select } from './components'
import { Table } from './components'

function App() {

  const [agreed, setAgreed] = useState(false)
  const [selected, setSelected] = useState('')

  const personnes = [
    { name: 'Arthur', age: 24, city: "Namur"},
    { name: "Charlie", age: 22, city: "Charleroi" },
    { name: "Romeo", age: 19, city: "Milan" },
    { name: "Enrique", age: 32, city: "Barcelone" },
    { name: "Alice", age: 25, city: "Paris" },
    { name: "François", age: 34, city: "Lyon" },
    { name: "Bob", age: 30, city: "Londres" }
  ]
  return (
    <>
      <SideBar links={navLinks} />
      <Checkbox checked={agreed} onChange={setAgreed} label="I agree to the terms" />
      <Select
          options={[
              { value: 'be', label: 'Belgium' },
              { value: 'fr', label: 'France' },
          ]}
          value={selected}
          onChange={setSelected}
          placeholder="-- Choose a country --"
      />
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

      <Table items={personnes} rowsPerPage={5}></Table>
      <Table items={personnes} rowsPerPage={5} columns={["city", "name"]}></Table>
      <Table items={[]}></Table>
      <Table></Table>
    </>
  );
}

export default App