<script lang="ts">
  import type {Partner} from "./lib/types.ts"
  import NameInput from "./lib/components/NameInput.svelte";

  let partners: Partner[] = $state([])

  function createPartners(name1: string, name2:string) {
    partners = [
      { id: 'A', name: name1, section_answers: {} },
      { id: 'B', name: name2, section_answers: {} },
    ]
  }
</script>



<main>
  <h1>Welcome to Couples Finance</h1>
  <div>
    <p>
      This is a tool designed to help you live a life together without worrying about money. Would you like to start this journey?
    </p>

    {#if partners.length === 0}
      <NameInput onsubmit={createPartners}/>
    {:else}
      <p>Welcome {partners[0].name} and {partners[1].name}</p>
    {/if}

  </div>
</main>
