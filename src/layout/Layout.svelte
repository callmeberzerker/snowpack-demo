<script lang="ts">
  import App from 'src/App.svelte'
  import Bla from 'src/components/Bla.svelte'
  import { workbenches } from 'src/config/workbench'
  import { Link, navigate } from 'svelte-navigator'
  export let tables: string[]

  let selected = tables[0]
  let search = ''
  export let pageUrl: string

  const handleSubmit = (e: Event) => {
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData.entries())
    navigate(`${pageUrl}?search=${data.search}&table=${data.table}`)
  }
</script>

{#each workbenches as workbench}
  <Link to={workbench.path}>{workbench.name}</Link>
{/each}

<form on:submit|preventDefault={handleSubmit}>
  <select name="table" value={selected} on:change={(e) => (selected = e.currentTarget.value)} on:blur={() => {}}>
    {#each tables as table}
      <option value={table}>
        {table}
      </option>
    {/each}
  </select>

  <input bind:value={search} name="search" />

  <button disabled={!search} type="submit"> Submit </button>
</form>
