import express from 'express';

const app=express();

app.get('/',(req,res)=>{

    res.send('Server is ready');

});

//get a list of jokes 
                       
app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:"first joke",
        },
        {
            id:2,
            title:"second joke",
        },
        {
            id:3,
            title:"third joke",
        },
    ];
    res.send(jokes);
})

const port=process.env.PORT || 5000 ;

app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`);
});