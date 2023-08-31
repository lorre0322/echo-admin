<script>
  import { req , getCookie , getTimeStamp } from "$lib/utils";
  import { onMount } from "svelte";
  let name,album = "life",desc,files,base64
  onMount(() => {
    name=getTimeStamp()
  });
	$: if (files) {
		for (const file of files) {
      const fr = new FileReader();
      fr.readAsDataURL(file);
      fr.onloadend=function() {
        base64=fr.result
      }
		}
	}

  async function upload() {
    const data = await req.post('img',{
      user:getCookie().user,
      token:getCookie().token,
      name,album,desc,base64
    })
    console.log(data);
  }
</script>

<input type="text" name="name" bind:value={name} />
<input type="text" name="album" bind:value={album} />
<input type="text" name="desc" bind:value={desc} />
<br>
<label for="img">
  Upload a picture
  <input id="img" name="base64" type="file" bind:files>
</label>

<button on:click={upload}>upload</button>


{#if files}
	<h2>Selected files:</h2>
	{#each Array.from(files) as file}
    {#if base64}
    <img src={base64} alt="" srcset="">
    {/if}
		<p>{file.name} ({file.size} bytes)</p>
	{/each}
{/if}

<style>
  input{
    display: block;
  }
  img{
    max-width: 100px;
  }
</style>