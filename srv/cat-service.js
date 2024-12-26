const loggerFunc = (title, msgs) => {
    console.group(title);
    msgs.forEach((x) => {
        console.log(x);
    })
    console.groupEnd();
}

const cds = require('@sap/cds')

// know the CDS version 
const [major, minor] = cds.version.split('.').map(Number);
loggerFunc("CDS Version", [`mjor: ${major}`, `minor ${minor}`])

// home for cds to know where CDS is installed 
loggerFunc("CDS Home", [cds.home]);

// Project Root
loggerFunc("CDS Root", [cds.root]);

class services extends cds.ApplicationService {
    init() {
        this.on('getCDSVersion', req => {
            let vstring = "" + cds.version;
            req.reply(vstring);
        })

        this.on('getCDSProperty', req => {
            let { data } = req;
            let { prop } = data;
            let pstring = "" + JSON.stringify(cds[prop]);
            if(pstring){
                req.reply(pstring);
            }else{
                req.error(400, `No Such CDS Property Found`)
            }
        })

        this.on('cdsExit', req => {
            cds.exit();
            return "Initiated"
        })
        return super.init()
    }
}

module.exports = services