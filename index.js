const http=require('http')
const url=require('url')
const fs=require('fs')



const data=fs.readFileSync(`${__dirname}/data.json`,'utf-8')
const dataAvatar=fs.readFileSync(`${__dirname}/components/Avatar.js`,'utf-8')
const dataObject=JSON.parse(data)

    const avatar=require('./components/Avatar.js')

const server=http.createServer((req,res)=>{


    //  الانا عليهrouting ده بيطبع ال 
    //routing example:  localhost:3000/  that mean im in home page
const pathName=req.url

    console.log(req.url)
    if(pathName==='/'||pathName==='/overview'){
fs.readFile('',null,(err,data)=>{
    res.end(data)
    console.log(data)
})

    //     res.writeHead(200,{'Content-type':'application/js'})
    // res.end(dataAvatar)}

    }

    else if(pathName=='/product'){
        res.end("my routing in product")

        // start
    }else if(pathName==='/api'){
        res.writeHead(200,{'Content-type':'application/json'})
        res.end(data)
// end 

     
    }else{
        res.writeHead(404,{'Content-type':'text/html','my-own-header':'hello-world'})
        res.end('<h1>page not found!</h1>')
    }})

server.listen(3500,()=>{
    console.log('fuck routing again')
})