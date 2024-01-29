const express = require('express')
const router = express.Routes()

const { addUser, getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/controllers')

router.post('/',addUser)
router.get('/',getAllUsers)
router.get('/:id',getUserById)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)

module.exports = router