var configuration = require('./config');
const debug =configuration.debugMode;


class ApiInvoker {

    getApiHeader(){
        return {
            'Content-Type':'application/json',
            authorization: window.localStorage.getItem('token'),
        }
    }

    invokeGET(url,okCallback,failCallback){
        let params={
            method:'get',
            headers:this.getApiHeader()
        }
        this.invoke(url,okCallback,failCallback,params);
        
    }

    invokePUT(url,okCallback,failCallback){
        let params = {
            method:'put',
            headers:this.getApiHeader(),
            body:JSON.stringify(body)
        }

        this.invoke(url,okCallback,failCallback,params);
    }

    invokePOST(url,body,okCallback,failCallback){
        let params={
            method:'post',
            headers: this.getApiHeader(),
            body:JSON.stringify(body)
        }

        this.invoke(url,okCallback,failCallback,params)
    }



    invoke(url,okCallback,failCallback,params){
        if(debug){
            console.log("Invoke =>"+params.method + ":" +url);
            console.log(params.body);
        }

        fetch('${configuration.nexora.api}${url}',params)
        .then((response)=> {
            if(debug){
                console.log("Invoke Response => ",response);
            }
            return response.json();
        }).then((responseData) => {
            if(responseData.ok){
                okCallback(responseData);
            }else {
                failCallback(responseData);
            }
        })


    }
}
export default new ApiInvoker;