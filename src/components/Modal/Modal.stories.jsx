import Modal from './Modal';
import Button from '../Button/Button';

export default {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export const Small = {
  args: {
    title: 'Petite modal',
    size: 'small',
    trigger: <Button label="petite modal" primary />,
    children: <p>Contenu</p>,
  },
};

export const Medium = {
  args: {
    title: 'Moyenne modal',
    size: 'medium',
    trigger: <Button label="moyenne modal" primary />,
    children: <p>Contenu</p>,
  },
};

export const Large = {
  args: {
    title: 'Grande modal',
    size: 'large',
    trigger: <Button label="grande modal" primary />,
    children: <p>Contenu</p>,
  },
};

export const WithActions = {
  args: {
    title: 'Supprimer un élément',
    size: 'small',
    trigger: <Button label="supprimer un élément" primary />,
    showActions: true,
    confirmText: 'Supprimer',
    cancelText: 'Annuler',
    onConfirm: () => {
      console.log('Élément supprimé');
    },
    children: (
      <p>
        Êtes-vous sûr de vouloir supprimer cet élément ?
      </p>
    ),
  },
};