<script lang="ts">
  import Bla from 'src/components/Bla.svelte'
  import { workbenches } from 'src/config/workbench'
  import MainPage from 'src/MainPage.svelte'
  import { Router, Route } from 'svelte-navigator'

  import { onMount } from 'svelte'
  import { each } from 'svelte/internal'
  let count: number = 0
  onMount(() => {
    const interval = setInterval(() => count++, 1000)
    return () => {
      clearInterval(interval)
    }
  })
</script>

<div>
  <Router url="" primary={false}>
    {#each workbenches as workbench}
      <Route path={workbench.path} component={MainPage} />
    {/each}
  </Router>
</div>

<style>
</style>
