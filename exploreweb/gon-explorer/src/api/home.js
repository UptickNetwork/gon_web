import axios from "axios";
const service = axios.create({
    timeout: 300000,
  });

export function myFocus(params) {
    return service.post('/uptickevmapi/getCrossChainListByTxid', 
        transObjToParamStr(params)
    )
}

function transObjToParamStr(object) {
   
let arr=[]
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            arr.push(`${key}=${element}`);
        }
    }
    return arr.join('&');
}