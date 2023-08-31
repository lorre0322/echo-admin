<script>
  import "../css/theme.css";
  import "../css/global.css";
  import "../css/template.css";
  import "../css/main.css";
</script>

<svelte:head>
	<title>Rain Admin</title>
	<meta name="description" content="Dashboard home" />
</svelte:head>

<div id="space">
<slot />
</div>
<div id="msg-info"></div>
<style>
  #space{
    max-width: 800px;
    padding: 15px;
    margin-inline: auto;
    overflow: hidden;
  }
</style>

