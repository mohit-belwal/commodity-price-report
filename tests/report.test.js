const request = require('supertest')
const app = require('../src/app')
const Report = require('../src/models/aggReport')
const {reportOne, reportTwo, setupDatabase} = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should create aggregated report', async()=>{
    const response = await request(app).post('/reports')
            .send({
                description: 'Testing reports router'
            })
            .expect(201)

    const report = await Report.findById(response.body.reportID)
    expect(report).not.toBeNull()
    expect(response.body.status).toBe("success")
    expect(response.body.reportID).toBe(true)
})

// test('Should get aggregated report by its Id', async()=>{
//     const response = await request(app).get('/reports')
//             .send()
//             .expect(200)
//     // console.log(response)
//     expect(response.body.length).toBe(2)
// })