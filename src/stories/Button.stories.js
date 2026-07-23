import { fn } from 'storybook/test';
import { Button } from '../components/Button/Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    isLoading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    variant: 'primary',
    label: 'Bouton Primary',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    label: 'Bouton Secondary',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    label: 'Supprimer',
  },
};

export const Loading = {
  args: {
    variant: 'primary',
    label: 'Chargement en cours...',
    isLoading: true,
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    label: 'Je suis désactivé',
    disabled: true,
  },
};