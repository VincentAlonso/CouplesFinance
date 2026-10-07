<script lang="ts">

    interface Props {
        onsubmit: (name1: string, name2: string) => void;
    }
    let {onsubmit}: Props = $props();

    let name1: string = $state("")
    let name2: string = $state("")

    let canSubmit: boolean = $derived(name1.trim() !== "" && name2.trim() !== "")
</script>

<div>
    <input type="text" placeholder="What is your name" bind:value={name1}/>
    <input type="text" placeholder="And your partners" bind:value={name2}/>
    <button disabled={!canSubmit} onclick={() => onsubmit(name1, name2)}> Start </button>

</div>