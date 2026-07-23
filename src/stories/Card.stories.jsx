import { Card } from '../components/Card/Card';
import { Button } from '../components/Button/Button'; // Si tu souhaites utiliser ton bouton dedans

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    image: { control: 'text' },
    imageAlt: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

export const Default = {
  args: {
    title: 'Titre de la carte',
    subtitle: 'Sous-titre explicatif',
    children: <p>Ceci est le contenu principal de la carte. On peut y mettre du texte, des composants, etc.</p>,
  },
};

export const WithImage = {
  args: {
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Exemple d image',
    title: 'Carte avec Image',
    subtitle: 'Créée avec style',
    children: <p>Le contenu s affiche juste en dessous de l image et des titres par défaut.</p>,
  },
};

export const WithFooterAndAction = {
  args: {
    title: 'Carte interactive',
    subtitle: 'Avec un footer personnalisé',
    children: <p>Cette carte possède des boutons d action dans le pied de page.</p>,
    footer: (
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
        <Button variant="secondary" label="Annuler" />
        <Button variant="primary" label="Valider" />
      </div>
    ),
  },
};

export const ClickableCard = {
  args: {
    title: 'Carte cliquable',
    subtitle: 'Cliquez-moi !',
    children: <p>Cette carte réagit au clic grâce à la prop onClick.</p>,
    onClick: () => alert('Carte cliquée !'),
  },
};