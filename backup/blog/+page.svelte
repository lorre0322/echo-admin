<script>
  import { onMount } from "svelte";
  import { req, getCookie } from "$lib/utils";
  let title = "123",
    date = "",
    img = "",
    categ = "",
    tags ="",
    body = "# first";
  let selected;
  let categs = [
    { id: 1, name: "随笔" },
    { id: 2, name: "笔记" },
    { id: 3, name: "观影" },
    { id: 4, name: "" },
  ];
  async function postBlog() {
    const data = await req.post("blog", {
      user: getCookie().user,
      token: getCookie("token").token,
      title,
      date,
      img,
      categ: selected.name,
      tag:tags.split(',')||'',
      body,
    });
    console.log(data);
  }
  onMount(() => {
    // Default post time
    const time = new Date().getTime();
    date = Math.trunc(time / 1000);
  });
</script>

<input placeholder="title" type="text" bind:value={title} />
<input placeholder="date" type="text" bind:value={date} />
<input placeholder="img" type="text" bind:value={img} />
<select bind:value={selected}>
  {#each categs as opt}
    <option value={opt}>
      {opt.name}
    </option>
  {/each}
</select>
<input type="text" bind:value={tags}>

<textarea bind:value={body} />
<button on:click={postBlog}>post</button>
