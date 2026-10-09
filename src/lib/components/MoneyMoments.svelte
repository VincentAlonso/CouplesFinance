<!--
This component is meant to guide users through their history with money. What exact phrases did they hear growing up
which may have shaped their thoughts and views; what did their parents say, their grandparents, what was drilled into
them.

This will need a questions script and an answers array, which will need to be into partners. It will also need
a tradeoff system where one partner answers, the second partner trades in, they answer, then they compare and review.
This data will have to persist, so it must be passed back.
-->
<script lang="ts">
    import type {Partner} from "../types";

    interface Props {
        partner1: Partner
        partner2: Partner
        onsubmit: (partner1_answers: string[], partner2_answers: string[]) => void
    }

    let {partner1, partner2, onsubmit}: Props = $props()

    const section_id: number = 1 //might need to be returned along with answers
    const section_script: string[] = [
        "This section will be about what shaped your mindset towards money growing up, specifically" +
        " common phrases that you may have heard your parents say. These phrases feel like they are ingrained" +
        " in you. As an example, something that most men hear growing up is that they need to \"Provide for their family\" or \"Be a man.\"",
        "These phrases or mindsets shape your everyday actions more than you realize, and identifying them can help you break the cycle" +
        " of mismanagement.",
        "Some other examples are \"Investing is for rich people, the stock market is just gambling\"," +
        " \"Stop worrying, we'll be fine\", or \"Must be nice to be able to afford that\"",
        "Now I want each of you to think of five phrases that you heard growing up, or ones that stick in your head when you think about " +
        "spending, saving, or anything else related to a money mindset. You'll be doing these activities separately so that you" +
        " don't bias each other's answers, so let's start with " + partner1.name + "!"
    ]

    let current_answer: string = $state("")
    let partner1_answers: string[] = $state([])
    let partner2_answers: string[] = $state([])

    let current_state: number = $state(0)

    let index: number = $state(0)
    let isLast: boolean = $derived(index === section_script.length - 1)

    function advance_intro() {
        if (isLast) {
            current_state += 1
        } else {
            index += 1
        }
    }
</script>

<div>
    {#if current_state === 0} <!-- Intro -->

    {:else if current_state === 1} <!-- Partner 1 start -->

    {:else if current_state === 2} <!-- Partner 2 start -->

    {:else if current_state === 3} <!-- Compare -->

    {:else} <!-- Conclusions -->

    {/if}
</div>