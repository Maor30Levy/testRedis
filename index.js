const redis = require('redis');
// const redisHost = ;
// const redisPort = 6379
const client = redis.createClient({
    url: 'redis://redistest.rb00sz.0001.use2.cache.amazonaws.com:6379',
    tls: {}
});

client.on("error", (error)=> {
    console.error(error);
  });


  client.on("ready", ()=>{
    const response = {
        statusCode: 200,
        body: {'message': 'Redis is ready!'}
    }
    console.log(response);
  }); 

const tree = {
    root: {
        title: 'title',
        url: 'www',
        id: '0',
        children: [
            {
                title: 'child1',
                url: 'www1',
                id: '00',
                children:[]
            },
            {
                title: 'child2',
                url: 'www1',
                id: '01',
                children:[]
            }
        ]
    },
    url: 'url1',
    maxLevel: 3,
    numOfNodes: 1
}

client.set("key", "value", redis.print);
client.get("key", redis.print);





