function requestSender(type, url, funHandeler, header = {}, body=null ){
    const req = new XMLHttpRequest();
    req.open(type,url)

    Object.keys(header).forEach((key) => {
        req.setRequestHeader(key, header[key]);
    });
    
    req.setRequestHeader("Content-type", "application/json");
    req.send()
    req.onload=()=>{
      const response = JSON.parse(req.responseText);
     funHandeler(response);
    }
}