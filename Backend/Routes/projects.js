const express = require('express')
const router = express.Router()
const Project = require('../Models/project')
router.get('/', async(req,res) => {
try{
const projects = await Project.find()
res.json(projects)
}catch(err){
res.send('Error ' + err)
}
})
router.get('/:id', async(req,res) => {
try{
const project = await Project.findById(req.params.id)
res.json(project)
}catch(err){
res.send('Error ' + err)
}
})
router.post('/', async(req,res) => {
const project = new Project({
username: req.body.username,
title: req.body.title,
description: req.body.description
})
try{
const a1 = await project.save()
res.json(a1)
}catch(err){
res.send('Error')
}
})
router.patch('/:id',async(req,res)=> {
try{
const project = await Project.findById(req.params.id)
project.description = req.body.description
const a1 = await project.save()
res.json(a1)
}catch(err){
res.send('Error')
}
})
// Delete a user
router.delete('/:id', getProject, async (req, res) => {
try {
// await res.user.remove();
await res.project.deleteOne();
res.json({ message: 'Deleted User' });

} catch (err) {
res.status(500).json({ message: err.message });
}
});
async function getProject(req, res, next) {
let project;
try {
project = await Project.findById(req.params.id);
if (project == null) {
return res.status(404).json({ message: 'Cannot find user' });
}
} catch (err) {
return res.status(500).json({ message: err.message });
}
res.project = project;
next();
}
module.exports = router
