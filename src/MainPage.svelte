<script lang="ts">
  import { workbenches } from 'src/config/workbench'
  import Layout from 'src/layout/Layout.svelte'
  import { onMount } from 'svelte'

  export let location: Location
  let activeWorkbench = workbenches.filter((x) => x.path === location.pathname)[0]

  console.log(activeWorkbench)

  let mounted = false
  onMount(() => {
    mounted = true
  })

  let params: any

  $: params = resolveSearchURLParams(location, activeWorkbench.tables)

  const resolveSearchURLParams = (location: Location, tableNames: string[]) => {
    console.log('running')
    console.log(location)
    const urlParams = new URLSearchParams(location.search)
    const search = urlParams.get('search')
    const table = urlParams.get('table')

    const resolvedTable = !table ? tableNames[0] : table
    const resolvedSearch = !search ? '' : search

    const isTableNameValid = tableNames.some((x) => x === resolvedTable)

    if (!isTableNameValid) {
      throw Error(`Table name ${table} is not a valid.`)
    }

    return {
      search: resolvedSearch,
      table: resolvedTable,
    }
  }
</script>

<Layout tables={activeWorkbench.tables} pageUrl={activeWorkbench.path} />

<div>hello from {location.pathname}</div>

<pre>{JSON.stringify(params, null, 2)}</pre>

<div />
