import "./App.css";
import React from "react";
import {
  Button,
  Badge,
  Card,
  Table,
  SideBar,
  Checkbox,
  Select,
  Modal,
} from "./components";
import "./App.css";
import { useState } from "react";
import { navLinks } from "./config/navLinks.js";

function App() {
  const [agreed, setAgreed] = useState(false);
  const [selected, setSelected] = useState("");

  const personnes = [
    { name: "Arthur", age: 24, city: "Namur" },
    { name: "Charlie", age: 22, city: "Charleroi" },
    { name: "Romeo", age: 19, city: "Milan" },
    { name: "Enrique", age: 32, city: "Barcelone" },
    { name: "Alice", age: 25, city: "Paris" },
    { name: "François", age: 34, city: "Lyon" },
    { name: "Bob", age: 30, city: "Londres" },
  ];
  return (
    <>
      <div
        style={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {/* SideBar et contrôles de formulaire */}
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
            
        {/* Section Test des Boutons */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <SideBar links={navLinks} />
          <Checkbox
            checked={agreed}
            onChange={setAgreed}
            label="I agree to the terms"
          />
          <Select
            options={[
              { value: "be", label: "Belgium" },
              { value: "fr", label: "France" },
            ]}
            value={selected}
            onChange={setSelected}
            placeholder="-- Choose a country --"
          />
          <div
            style={{
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <h2>Test de mes boutons</h2>

            <div>
              <Button
                label="Bouton Primary"
                onClick={() => alert("Cliqué sur Primary !")}
              />
            </div>

            <div>
              <Button
                variant="secondary"
                label="Bouton Secondary"
                onClick={() => console.log("Secondary cliqué")}
              />
            </div>

            <div>
              <Button variant="danger" label="Supprimer" />
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

          <hr style={{ border: "0", borderTop: "1px solid #cbd5e1" }} />

          {/* Section Test des Badges */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <h2>Test de mes badges</h2>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Badge content="Primary" variant="primary" />
              <Badge content="Secondary" variant="secondary" />
              <Badge content="Success" variant="success" />
              <Badge content="Warning" variant="warning" />
              <Badge content="Danger" variant="danger" />
            </div>

            <h3>Test des tailles (sm, md, lg)</h3>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <Badge content="Petit (sm)" size="sm" variant="primary" />
              <Badge content="Moyen (md)" size="md" variant="primary" />
              <Badge content="Grand (lg)" size="lg" variant="primary" />
            </div>

            <h3>Test des compteurs (avec limite max)</h3>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <Badge content={5} max={99} variant="danger" />
              <Badge content={150} max={99} variant="danger" />
            </div>

            <h3>États (Actif / Inactif)</h3>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <Badge content="Actif" isActive={true} variant="success" />
              <Badge content="Inactif" isActive={false} variant="success" />
            </div>
          </div>

          <hr style={{ border: "0", borderTop: "1px solid #cbd5e1" }} />

          {/* Section Test des Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2>Test de mes cards</h2>
        
            <Card
              title="Title"
              subtitle="Description"
              image="https://picsum.photos/600/300"
              footer={
                <>
                  <Button variant="secondary" label="Cancel" />
                  <Button variant="primary" label="Validate" />
                </>
              }
            >
              <p>Description</p>
            </Card>

            <Card
              title="Interactive card"
              subtitle="Click on this card"
              onClick={() => alert('You clicked ! ')}
            >
              <p>Click Here</p>
            </Card>
          </div>

          <hr style={{ border: '0', borderTop: '1px solid #cbd5e1' }} />

          {/* Section Test des Modals */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <h2>Test de ma modal</h2>

            <Modal
              title="Petite modal"
              size="small"
              trigger={<Button label="petite modal" variant="primary" />}
            >
              <p>Contenu</p>
            </Modal>

            <Modal
              title="Moyenne modal"
              size="medium"
              trigger={<Button label="moyenne modal" variant="primary" />}
            >
              <p>Contenu</p>
            </Modal>

            <Modal
              title="Grande modal"
              size="large"
              trigger={<Button label="grande modal" variant="primary" />}
            >
              <p>Contenu</p>
            </Modal>

            <Modal
              title="Supprimer un élément"
              trigger={<Button label="Supprimer un élément" variant="primary" />}
              size="small"
              showActions={true}
              confirmText="Supprimer"
              cancelText="Annuler"
              onConfirm={() => {
                console.log("Élément supprimé");
              }}
            >
              <p>Êtes-vous sûr de vouloir supprimer cet élément ?</p>
            </Modal>
          </div>
        </div>
      </div>
      <Table items={personnes} rowsPerPage={5}></Table>
      <Table items={personnes} rowsPerPage={5} columns={["city", "name"]}></Table>
      <Table items={[]}></Table>
      <Table></Table>
    </>
  );
}

export default App;
