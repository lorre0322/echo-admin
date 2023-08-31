<script>
  import { req } from "$lib/utils";
  import { onMount } from "svelte";
  import { setCookie } from "$lib/utils";
  let name='lorre',pw='wasd33259181'
  async function login() {
    const data=await req.post('login',{name,pw})
    console.log(data);
    if(data.ok){
      console.log(data);
      setCookie('token',data.token)
      setCookie('user',data.user)
    }
  }
  
  onMount(()=>{
    // login()
  })
</script>

<input type="text" bind:value={name}>
<input type="text" bind:value={pw}>
<button on:click={login}>login</button>