import type { Meta, StoryObj } from '@storybook/react';
import PoemInput from './PoemInput';
import { useState } from 'react';

const meta: Meta<typeof PoemInput> = {
  title: 'Components/PoemInput',
  component: PoemInput,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof PoemInput>;

const Wrapper = (args: any) => {
  const [poem, setPoem] = useState('');
  const [result, setResult] = useState<any>(null);
  return (
    <div style={{ maxWidth: 480 }}>
      <PoemInput poem={poem} setPoem={setPoem} setResult={setResult} {...args} />
      {result && (
        <div style={{ marginTop: 16, background: '#f3f3f3', padding: 8 }}>
          <div><b>Lyrics:</b> {result.lyrics}</div>
          <div><b>Chords:</b> {result.chords}</div>
          <div><b>MelodyUrl:</b> {result.melodyUrl}</div>
        </div>
      )}
    </div>
  );
};

export const Default: Story = {
  render: (args) => <Wrapper {...args} />,
  args: {},
};
