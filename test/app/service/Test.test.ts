import { Context } from 'egg';
import { app } from 'egg-mock/bootstrap';

describe('test/app/service/Test.test.js', () => {
  let ctx: Context;

  before(async () => {
    ctx = app.mockContext();
  });

  it('sayHi', async () => {
    
  });
});
