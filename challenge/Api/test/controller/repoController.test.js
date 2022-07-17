const { expect } = require('chai');
const sinon = require('sinon');
const repoController = require('../../controller/repoController');
const repoService = require('../../service/repoService');

describe('Testa o arquivo repoController na função:', () => {
  describe('findOldest', () => {
    const response = {};
    const request = {};
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
    });

    describe('Caso de sucesso', () => {
      it('Testa se é retornado status 200 quando tudo ocorrer bem', async () => {
  
        await repoController.findOldest(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
    });

    describe('Caso de falha', () => {
      before(() => {
        sinon.stub(repoService, 'findOldest').resolves({ message: 'invalid endpoint', code: 500 })
      });
      after(() => {
        repoService.findOldest.restore();
      });

      it('Testa se é retornado status 500 quando é passado um endpoint inválido', async () => {
        await repoController.findOldest(request, response);
        expect(response.status.calledWith(500)).to.be.equal(true);
      });
    });
  });
});