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

    let {partner1, partner2, onready}: Props = $props()

    const intro_script: string[] = [
        "When you think about things you say to each other about money, what springs to mind?",
        "You spent how much on that!?",
        "I feel like we don't have a plan, like we're just spending and spending",
        "It feels like we never have enough money, no matter what we do!",
        "Or do you just not talk about it at all?",
        "The goal of these exercises is to give you the tools to not just understand your money, but to feel good about" +
        " talking about, spending it, and planning for your future together."
    ]

    let index: number = $state(0)
    let isLast: boolean = $derived(index === intro_script.length - 1)

    function advance () {
        if (isLast) {
            onready()
        } else {
        index = index + 1
            }
    }
</script>

<div>
    <p>{intro_script[index]}</p>
    <button onclick={advance}> {isLast ? "Ready?" : "Next"}</button>
</div>