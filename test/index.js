'use strict';

var should = require('chai').should();
var bcccore = require('../');

describe('Library', function() {
  it('should export primatives', function() {
    should.exist(bcccore.crypto);
    should.exist(bcccore.encoding);
    should.exist(bcccore.util);
    should.exist(bcccore.errors);
    should.exist(bcccore.Address);
    should.exist(bcccore.Block);
    should.exist(bcccore.MerkleBlock);
    should.exist(bcccore.BlockHeader);
    should.exist(bcccore.HDPrivateKey);
    should.exist(bcccore.HDPublicKey);
    should.exist(bcccore.Networks);
    should.exist(bcccore.Opcode);
    should.exist(bcccore.PrivateKey);
    should.exist(bcccore.PublicKey);
    should.exist(bcccore.Script);
    should.exist(bcccore.Transaction);
    should.exist(bcccore.URI);
    should.exist(bcccore.Unit);
  });
});
