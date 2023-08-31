<script>
  import { onMount } from "svelte";
  import { req , getCookie } from "$lib/utils";
  let date='',tag='',body='first'
  let selected
  let tags=[
    {id:1,name:'life'},
    {id:2,name:'think'},
    {id:3,name:'emo'},
    {id:4,name:'code'},
  ]
  async function postMoment() {
    const data = await req.post('mom',{
      user:getCookie().user,
      token:getCookie('token').token,
      tag,
      date,body
    })
    console.log(data);
  }
  onMount(()=>{
    // Default post time
    const time=new Date().getTime()
    date=Math.trunc(time/1000)
  })
  </script>
  <input type="text" bind:value={date}>
    <select bind:value={selected} on:change={() => (tag = selected.name)}>
      {#each tags as opt}
        <option value={opt}>
          {opt.name}
        </option>
      {/each}
    </select>
  
  <textarea bind:value={body} />
  <button on:click={postMoment}>post</button>