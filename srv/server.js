"use strict";
const cds = require('@sap/cds');
// https://cap.cloud.sap/docs/node.js/cds-server#lifecycle-events
cds.on('bootstrap', app => {
    console.log("In Bootstrap")
    app.get('/health', (_, res) => {
        res.status(200).send('OK');
    });
});

cds.on('served', app => {
    console.log("In served")
});

cds.on('listening', app => {
    console.log("In listening")
})

//   called when cds.exit() is invoked 
cds.on('shutdown', app => {
    console.log("In Shutdown")
    // immediately after this the server will restart. 

});

// https://cap.cloud.sap/docs/node.js/cds-compile#lifecycle-events
cds.on('compile.for.runtime', app => {
    console.log("In compile.for.runtime")
})
cds.on('compile.to.dbx', app => {
    console.log("In compile.to.dbx")
})
cds.on('compile.to.edmx', app => {
    console.log("In compile.to.edmx")
})


module.exports = cds.server