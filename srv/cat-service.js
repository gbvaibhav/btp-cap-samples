const loggerFunc = (title, msgs) =>{
    console.group(title);
    msgs.forEach((x) =>{
        console.log(x);
    })
    console.groupEnd();
}

const cds = require('@sap/cds')

// know the CDS version 
const [major, minor] = cds.version.split('.').map(Number);
loggerFunc("CDS Version",[`mjor: ${major}`, `minor ${minor}`])

// home for cds to know where CDS is installed 
loggerFunc("CDS Home",[cds.home]);

// Project Root
loggerFunc("CDS Root",[cds. root]);

