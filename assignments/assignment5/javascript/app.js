/*Andy Kukuc
 * Professor Charles Beck
 * ITMD-462-01
 * 10-31-2019*/
//app.js file to connect everything
const express=require('express');
const app=express();
const morgan=require('morgan');
const productRoutes=require('../routes/products.js');
const orderRoutes=require('../routes/orders.js');
const userRoutes=require('../routes/users.js');
app.use(morgan('dev'));
// Routes which should handle requests
app.use('/products',productRoutes);
app.use('/orders',orderRoutes);
app.use('/users',userRoutes);
app.use((req,res,next)=>{
    const error=new Error('Not Found');
    error.status=404;
    next(error);
});
app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message
        }
    });
});
module.exports=app;
