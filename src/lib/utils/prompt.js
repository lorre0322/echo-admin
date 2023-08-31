function addPrompt(addClass, param) {
  const info = document.getElementById("msg-info")
  const msg = document.createElement("div")
  msg.innerText=param
  msg.className = `msg an ${addClass}`
  info.appendChild(msg)
  setTimeout(()=>{
    msg.style.opacity='0'
  },1750)

  setTimeout(() => {
    info.removeChild(msg)
  }, 2000);
}
export const prompt = {
  df: e => addPrompt("", e),
  sc: e => addPrompt("suc", e),
  er: e => addPrompt("err", e)
}