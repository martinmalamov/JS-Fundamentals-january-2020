class  Request{
    constructor(methd,uri,version,message){
        this.method = methd
        this.uri = uri
        this.version = version
        this.message = message
        this.response = undefined
        this.fulfilled = false
    }
}




let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);
