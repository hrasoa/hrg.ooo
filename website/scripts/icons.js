const path = require('path');
const writeIconCollection =
  require('@celeste-ui/atlas/tools/writeIconCollection').writeIconCollection;

const iconCollections = [
  {
    prefix: 'lucide',
    icons: ['arrow-up-right'],
  },
];

writeIconCollection(
  iconCollections,
  `${path.join(__dirname, '../src/icons.json')}`
);
