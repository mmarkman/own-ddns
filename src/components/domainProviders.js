
import 'request'

class DomainProvider {

    DomainProvider(APIKey, APISecret) {

        this.APIKey = APIKey
        this.APISecret = APISecret
    
    }

    update () {

        console.log("update not implemented")
    
    }

}

export class GoDaddy extends DomainProvider {

    getUpdateURL() {

    }

    getBody() {

        return {}
    
    }

    getAuthHeader() {

        return "Authorization: sso-key " + this.APIKey + ":" + this.APISecret
    
    }

    update() {

        console.log("calling GoDaddy API")
    
    }

}


export class NameCheap extends DomainProvider {

    getHostRecords() {

    // must be done before calling setHosts
        
    // TODO: call API and get XML
        const responseXML = "<whyXMLin2018>no good reason</whyXMLin2018>"
        this.hostRecords = responseXML
    
    }

    getBody() {

        let body = this.hostRecords
        // manipulate XML to change the values you want 
        return body
    
    }

}