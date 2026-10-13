<!--
Steps through a script one string at a time. Calls ondone when the user clicks past the last slide.
-->
<script lang="ts">
    interface Props {
        script: string[]
        ondone: () => void
    }

    let {script, ondone}: Props = $props()

    let index: number = $state(0)
    let isLast: boolean = $derived(index === script.length - 1)

    function advance() {
        if (isLast) {
            ondone()
        } else {
            index += 1
        }
    }
</script>

<div>
    <p>{script[index]}</p>
    <button onclick={advance}> {isLast ? "Ready?" : "Next"}</button>
</div>
