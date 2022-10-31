import supertest from 'supertest';
import app from '../server/index';

const request = supertest(app);

/* ---- Test main endpoints / && /api ---- */
describe('Test endpoints responses', (): void => {
  describe('Test endpoints -> /api responses', (): void => {
    it('get /api', async () => {
      const response = await request.get('/api');
      expect(response.status).toBe(200);
    });
  });
  describe('Test endpoints -> / responses', (): void => {
    it('get /api', async () => {
      const response = await request.get('/');
      expect(response.status).toBe(404);
    });
  });
});

/* ---- Test /api/images routes ---- */
describe('Test endpoints -> /api/images responses', (): void => {
  // Test with sending only correct image name
  describe('Test endpoints -> /api/images/?image : with sending only correct image name responses', (): void => {
    it('get /api/images?image', async () => {
      const response = await request.get('/api/images/?image=fjord');
      expect(response.status).toBe(200);
    });
  });
  // Test with sending only false image name
  describe('Test endpoints -> /api/images/?image : with sending only false image name responses', (): void => {
    it('get /api/images?image', async (): Promise<void> => {
      const response = await request.get('/api/images/?image=fjordd');
      expect(response.status).toBe(404);
    });
  });
  // Test with sending image name with image dimentions
  describe('Test endpoints -> /api/images/?image&width&height : sending image name with image dimentions responses', (): void => {
    it('get /api/images?image', async (): Promise<void> => {
      const response = await request.get(
        '/api/images/?image=fjord&height=500&width=500'
      );
      expect(response.status).toBe(200);
    });
  });

  // Test with sending image name with image one dimention
  describe('Test endpoints -> /api/images/?image&width&height : sending image name with image one dimention responses', (): void => {
    it('get /api/images?image', async (): Promise<void> => {
      const response = await request.get('/api/images/?image=fjord&height=500');
      expect(response.status).toBe(200);
    });
  });
});
