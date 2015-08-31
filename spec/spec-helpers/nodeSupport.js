'use strict';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import mockery from 'mockery';
import sinon from 'sinon';

chai.use(chaiAsPromised);

global.expect = chai.expect;
global.sinon = sinon;
global.mockery = mockery;
global.mockSetup = (options = { warnOnUnregistered: false }) => {
  mockery.enable(options);
};
global.mockTearDown = () => {
  mockery.disable();
  mockery.deregisterAll();
};
