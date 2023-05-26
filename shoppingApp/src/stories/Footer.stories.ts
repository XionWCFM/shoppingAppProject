import type { Meta, StoryObj } from '@storybook/react';
import Footer from '../components/layouts/Footer';

const meta = {
  title: 'Example/Footer',
  component: Footer,
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;

export const PrimaryFooter: StoryObj<typeof Footer> = {
  args: {
    weight: 'lg',
    variant: 'primary',
  },
};

export const NotPrimaryFooter: StoryObj<typeof Footer> = {
  args: {
    weight: 'sm',
    variant: 'secondary',
  },
};
