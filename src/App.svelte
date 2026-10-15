<script lang="ts">
  import type {Partner} from "./lib/types.ts"
  import NameInput from "./lib/components/NameInput.svelte";
  import Intro from "./lib/components/Intro.svelte"
  import MoneyMoments from "./lib/components/MoneyMoments.svelte";
  import RichLife from "./lib/components/RichLife.svelte";

  let partners: Partner[] = $state([])

  function createPartners(name1: string, name2:string) {
    partners = [
      { id: 'A', name: name1, section_answers: {} },
      { id: 'B', name: name2, section_answers: {} },
    ]
  }

  let current_state: number = $state(0)

  function goForward() {
    current_state += 1
  }

  function goBackward() {
    current_state -= 1
  }

  function saveMoneyMoments(partner1_answers: string[], partner2_answers: string[]) {
    partners[0].section_answers[1] = partner1_answers
    partners[1].section_answers[1] = partner2_answers
    goForward()
  }

  function saveRichLife(partner1_answers: string[], partner2_answers: string[]) {
    partners[0].section_answers[2] = partner1_answers
    partners[1].section_answers[2] = partner2_answers
    goForward()
  }
</script>

<main>
  {#if current_state === 0}
    <h1>Welcome to Couples Finance</h1>
    <div>
      <p>
        This is a tool designed to help you live a life together without worrying about money. Would you like to start this journey?
      </p>

      {#if partners.length === 0}
        <NameInput onsubmit={createPartners}/>
      {:else}
        <p>Welcome {partners[0].name} and {partners[1].name}</p>
        <button onclick={goForward}>Start</button>
      {/if}
    </div>

  {:else if current_state === 1}
    <Intro partner1={partners[0]} partner2={partners[1]} onready={goForward}></Intro>

  {:else if current_state === 2}
    <MoneyMoments partner1={partners[0]} partner2={partners[1]} onsubmit={saveMoneyMoments}></MoneyMoments>

  {:else if current_state === 3 }
    <RichLife partner1={partners[0]} partner2={partners[1]} onsubmit={saveRichLife}></RichLife>

  {:else if current_state === 4}

  {/if}
</main>
