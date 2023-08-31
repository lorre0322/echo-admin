<script>
  import { req } from "$lib/utils";
  import { onMount } from "svelte";
  
  let name='lorre',pw='wasd33259181',mail='lorre0322@foxmail.com'
  async function signup() {
    console.log(name);
    const result=await req.post('signup',{
      name,pw,mail
    })
    console.log(result);
  }
  </script>
  
  <input type="text" bind:value={name}>
  <input type="text" bind:value={pw}>
  <input type="text" bind:value={mail}>
  <button on:click={signup}>signup</button>