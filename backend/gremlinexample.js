const gremlin = require('gremlin');
const https = require('https');
const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;
const Graph = gremlin.structure.Graph;

dc = new DriverRemoteConnection('wss://localhost:8182/gremlin',{rejectUnauthorized: false});

const graph = new Graph();
const g = graph.traversal().withRemote(dc);

g.V().limit(1).values('desc').toList().
    then(data => {
        console.log(data);
        dc.close();
    }).catch(error => {
        console.log('ERROR', error);
        dc.close();
    });


