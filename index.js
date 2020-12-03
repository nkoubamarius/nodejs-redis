const express=require('express');
const fetch=require('node-fetch');
const redis=require('redis');

const PORT =process.env.PORT || 5000;
const REDIS_PORT=process.env.PORT || 6379;

const client=redis.createClient(REDIS_PORT);

const app=express();

//Make request to Github for data
async function getRepos(req, res, next){
    try{

        console.log('fetching data....');
        

    }catch(err){
        console.error(err);
        res.status(500);
    }
}

app.get('/repos/:username', getRepos);

app.listen(5000, ()=>{
    console.log(`App listening on port ${PORT}`);
})