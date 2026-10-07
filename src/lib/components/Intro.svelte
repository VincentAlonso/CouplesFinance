<!--
This component should explain the overarching goal and average time taken of the app
Remind users that they are a team working towards making their money work for them,
rather than letting it control their actions and moods. Tell them how many sections
their are, and how long the experience will take to complete.
-->
<script lang="ts">
    import type {Partner} from "../types.ts"

    interface Props {
        readonly partner1: Partner
        readonly partner2: Partner
        onready: () => void
    }

    let {partner1, partner2}: Props = $props();
</script>

<div>

</div>