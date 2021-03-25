import { resolve } from 'path'
import { readFileSync } from 'fs';

import { compile } from 'solc';

const contractPath = resolve(__dirname, 'contracts', 'Inbox.sol');
const source = readFileSync(contractPath, {
  encoding: 'utf-8',
});

export default compile(source, 1).contracts[':Inbox']; 