const express = require('express')
const mongoose = require('mongoose')
const Report = require('../models/aggReport')
const router = new express.Router()


// Create a new request 
router.post('/reports', async (req, res)=>{
    const data = req.body.reportDetails
    
    let report = await new Report()
    report = await Report.findOne({marketID: data.marketID, cmdtyID: data.cmdtyID})

    try {
        if(!report){
            report = new Report({cmdtyName: data.cmdtyName, cmdtyID: data.cmdtyID, marketID: data.marketID,
            marketName: data.marketName, users: [data.userID], price: data.price/data.convFctr})
        } else{
            report.price = (report.price*(report.users.length)+(data.price/data.convFctr))/(report.users.length+1)
            report.users = report.users.concat(data.userID)
        }
        
        await report.save()
        res.status(201).send({status: "success", reportID: report._id})
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

// Get a aggregated report by its id present in the database 
// reports/?reportID=
router.get('/reports', async (req, res)=>{
    const _id = req.query 
    try {
        const report = await Report.findById(_id.reportID)
        
        if(!report){
            return res.status(404).send()
        }
        res.send(report)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router