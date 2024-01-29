const router = require('express').Router()

router.post('/register',(req,res)=>{
    res.send('Register page')
})

module.exports = router