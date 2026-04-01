const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../src/app');
const { User } = require('../../src/models');
const setupTestDB = require('../utils/setupTestDB');
const { userOne, admin, password, insertUsers } = require('../fixtures/user.fixture');

setupTestDB();

describe('Auth routes', () => {
  describe('POST /v1/auth/register', () => {
    let newUser;

    beforeEach(() => {
      newUser = {
        name: 'Jane Doe',
        mobile: '8765432100',
        password: 'password1',
      };
    });

    test('should return 201 and successfully register user if request data is ok', async () => {
      const res = await request(app)
        .post('/v1/auth/register')
        .send(newUser)
        .expect(httpStatus.CREATED);

      expect(res.body.user).not.toHaveProperty('password');
      expect(res.body.user).toMatchObject({
        name: newUser.name,
        mobile: newUser.mobile,
        role: 'employee',
      });

      const dbUser = await User.findById(res.body.user.id);
      expect(dbUser).toBeDefined();
      expect(dbUser.password).not.toBe(newUser.password);
    });

    test('should return 400 if mobile is already taken', async () => {
      await insertUsers([userOne]);

      await request(app)
        .post('/v1/auth/register')
        .send({ ...newUser, mobile: userOne.mobile })
        .expect(httpStatus.BAD_REQUEST);
    });

    test('should return 400 error if mobile is not provided', async () => {
      delete newUser.mobile;
      await request(app).post('/v1/auth/register').send(newUser).expect(400);
    });
  });

  describe('POST /v1/auth/login', () => {
    test('should return 200 and login user if mobile and password match', async () => {
      await insertUsers([userOne]);

      const loginBody = { mobile: userOne.mobile, password };

      const res = await request(app)
        .post('/v1/auth/login')
        .send(loginBody)
        .expect(httpStatus.OK);

      expect(res.body.user).not.toHaveProperty('password');
      expect(res.body.tokens).toHaveProperty('access');
      expect(res.body.tokens).toHaveProperty('refresh');
    });

    test('should return 401 if password is wrong', async () => {
      await insertUsers([userOne]);

      await request(app)
        .post('/v1/auth/login')
        .send({ mobile: userOne.mobile, password: 'wrongpassword1' })
        .expect(httpStatus.UNAUTHORIZED);
    });
  });
});
