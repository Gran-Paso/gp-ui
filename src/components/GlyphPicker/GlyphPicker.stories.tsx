import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import GlyphPicker from './GlyphPicker';
import { GlyphIcon, type GlyphValue } from './GlyphIcon';

const meta: Meta<typeof GlyphPicker> = {
  title: 'Components/GlyphPicker',
  component: GlyphPicker,
};

export default meta;
type Story = StoryObj<typeof GlyphPicker>;

export const Default: Story = {
  render: function Render() {
    const [value, setValue] = useState<GlyphValue>({ kind: 'emoji', value: '📦' });
    return (
      <div className="flex items-center gap-3 p-6">
        <GlyphPicker value={value} onChange={setValue} fallbackLabel="Wiki" />
        <span className="text-sm text-gray-500">
          {value.kind} {value.value}
        </span>
      </div>
    );
  },
};

export const IconOnly: Story = {
  render: function Render() {
    const [value, setValue] = useState<GlyphValue>({ kind: 'lucide', value: 'Package' });
    return (
      <div className="p-6">
        <GlyphPicker
          value={value}
          onChange={setValue}
          trigger={<GlyphIcon glyph={value} fallback="P" size={32} />}
        />
      </div>
    );
  },
};
