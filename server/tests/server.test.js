const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todomongoose} = require('./../models/todo');

const dummyTodos = [{
    text: 'Test Todo 1'
}, {
    text: 'Test Todo 2'
}, {
    text: 'Test Todo 3'
}];

beforeEach((done) => {
  Todomongoose.deleteMany({}).then(() => {
      return Todomongoose.insertMany(dummyTodos);
  }).then(() => done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test for todo text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todomongoose.find().then((todos) => {
          expect(todos.length).toBe(4);
          expect(todos[3].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });

  it('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todomongoose.find().then((todos) => {
          expect(todos.length).toBe(3);
          done();
        }).catch((e) => done(e));
      });
  });
});

describe('GET /todos', () => {
    it('should get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(3);
            })
            .end(done);
    });
});
