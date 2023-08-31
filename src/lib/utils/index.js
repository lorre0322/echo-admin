// Encapsulation fetch
async function Request(url, method, params) {
  const data= await fetch(`http://192.168.10.213:4000/${url}` , {
    method,
    headers:{ 'Content-Type':'application/json' },
    body:JSON.stringify(params),
  }).then((e => e.json()))
  return data
}
export const req = {
  get: async t => await Request(t, "GET"),
  post: async (t, e) => await Request(t, "POST", e),
  put: async (t, e) => await Request(t, "PUT", e),
  del: async (t, e) => await Request(t, "DELETE", e)
};

// Get cookie from client
export function getCookie(){
  var arr = [];
  var keyValue = document.cookie.split(";");
  for(var i in keyValue){
    var tmp = keyValue[i].split("=");
    arr.push('"'+tmp.shift().trim()+'":"'+tmp.join(":").trim()+'"')
  };
  var res ='{\n'+arr.join(",\n")+'\n}';
  return JSON.parse(res);
}
// Set cookie for client
export function setCookie(param,value){
  document.cookie=`${param}=${value}; Path=/; Max-Age=604800;secure=true`
}
// Returns a timestamp without milliseconds
export function getTimeStamp(){
  const t = new Date(),
    e = t.getFullYear().toString(),
    n = t.getMonth() + 1,
    r = t.getDate();
  function g(t) {
    return t < 10 ? "0" + t : t;
  }
return e + g(n) + g(r);
}