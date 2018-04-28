const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Block chain', () => {
  let bc;
  beforeEach(() => {
      bc = new Blockchain();
  });

  it('Start with geneis block', () => {
expect(bc.chain[0]).toEqual(Block.genesis());
  });

  it('Add a new Block', () => {
      const data = 'foo';
      bc.addBlock(data);
      expect(bc.chain[bc.chain.length-1].data).toEqual(data);

    });

});
