const {app} = require('../server')
const supertest = require('supertest')
const request = supertest(app);

describe('API test', () => {
    test('checking home route', async () => {
        const response = await request.get('/')
        expect(response.status).toEqual(200)
        expect(response.text).toEqual('everything is awesome ')

    });
    test('checking if the data is there', async () => {
        const response = await request.get('/data')
        expect(response.status).toEqual(200)
        expect(typeof response.body).toEqual('object')

    });
    test('checking if the time is there', async () => {
        const response = await request.get('/data');
        expect(response.status).toEqual(200);
        expect(response.body.time).toBeDefined();
    
      });
      test('checking invalid urls', async () => {
        const response = await request.get('/anything');
        expect(response.status).toEqual(404);
      });
      
    


})


