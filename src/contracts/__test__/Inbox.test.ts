import ganache from 'ganache-cli';
import Web3  from 'web3';
import { Contract } from 'web3-eth-contract';
import dataInboxCompiled from '../../compile';

const web3Instance = new Web3(ganache.provider());

describe('Inbox Contract', () => {
  let accounts: string[];
  let inbox: Contract;

  beforeEach(async () => {
    accounts = await web3Instance.eth.getAccounts();

    const { interface: contractInterface, bytecode} = dataInboxCompiled;
    inbox = await new web3Instance.eth.Contract(JSON.parse(contractInterface))
      .deploy({
        data: bytecode, arguments: ['Hello World!']
      })
      .send({from: accounts[0], gas: 1000000});
  });

  it('should deploy a contract', () => {
    expect(inbox.options.address).not.toHaveLength(0);
  });
});