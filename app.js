const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const {swaggerUi,swaggerSpec} = require('./swagger')

const app = express()

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use('/api/users',userRoutes)
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec))

//404
app.use((req,res)=>{
    res.status(404).json({
        success:false,
        message:"Route not found"
    })
})
// Global Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

module.exports = app;