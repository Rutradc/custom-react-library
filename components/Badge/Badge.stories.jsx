import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    content: {
      control: 'text',
    },
    max: {
      control: 'number',
    },
    isActive: {
      control: 'boolean',
    },
  },
};

export const Primary = {
  args: {
    content: 'Primary',
    variant: 'primary',
  },
};

export const Variants = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge content="Primary" variant="primary" />
      <Badge content="Secondary" variant="secondary" />
      <Badge content="Success" variant="success" />
      <Badge content="Warning" variant="warning" />
      <Badge content="Danger" variant="danger" />
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Badge content="Petit (sm)" size="sm" variant="primary" />
      <Badge content="Moyen (md)" size="md" variant="primary" />
      <Badge content="Grand (lg)" size="lg" variant="primary" />
    </div>
  ),
};

export const WithMaxLimit = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Badge content={5} max={99} variant="danger" />
      <Badge content={150} max={99} variant="danger" />
    </div>
  ),
};

export const States = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Badge content="Actif" isActive={true} variant="success" />
      <Badge content="Inactif" isActive={false} variant="success" />
    </div>
  ),
};