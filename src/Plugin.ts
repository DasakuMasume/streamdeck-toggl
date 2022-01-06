import { Streamdeck } from '@rweich/streamdeck-ts';

const plugin = new Streamdeck().plugin();

// your code here..
plugin.on('willAppear', ({ context }) => {
  plugin.setTitle('test', context);
});

plugin.on('keyDown', ({ row, column }) => console.log(`key down on ${row} / ${column}`));

export default plugin;
