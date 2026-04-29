import type { Meta, StoryObj } from '@storybook/react-vite';
import LoadingSkeleton from './LoadingSkeleton';

const meta: Meta<typeof LoadingSkeleton> = {
  title: 'Components/LoadingSkeleton',
  component: LoadingSkeleton,
  argTypes: {
    variant: { control: 'select', options: ['card', 'table', 'text'] },
    rows: { control: { type: 'range', min: 1, max: 10 } },
  },
};

export default meta;
type Story = StoryObj<typeof LoadingSkeleton>;

export const Card: Story = {
  args: { variant: 'card', rows: 3 },
};

export const TableVariant: Story = {
  args: { variant: 'table', rows: 5 },
};

export const Text: Story = {
  args: { variant: 'text', rows: 4 },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-2">Card</h3>
        <LoadingSkeleton variant="card" rows={2} />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-2">Table</h3>
        <LoadingSkeleton variant="table" rows={4} />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-2">Text</h3>
        <LoadingSkeleton variant="text" rows={3} />
      </div>
    </div>
  ),
};
