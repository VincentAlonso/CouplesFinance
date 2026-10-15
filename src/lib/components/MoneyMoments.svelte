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
    import Slides from "./Slides.svelte";

    interface Props {
        partner1: Partner
        partner2: Partner
        onsubmit: (partner1_answers: string[], partner2_answers: string[]) => void
    }

    let {partner1, partner2, onsubmit}: Props = $props()
    
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

    let partner1_answers: string[] = $state([])
    let partner2_answers: string[] = $state([])

    let current_state: number = $state(0)

    function goForward() {
        current_state += 1
    }

    function allFilled(answers: string[]): boolean {
        return [0, 1, 2, 3, 4].every(i => answers[i])
    }
</script>

<div>
    {#if current_state === 0} <!-- Intro -->
        <Slides script={section_script} ondone={goForward}/>
    {:else if current_state === 1} <!-- Partner 1 start -->
        <div class="answers">
            <p>
                What are five phrases that you heard growing up that you still hear in your mind today? Think about
                what your parents said when holidays or birthdays were coming around, or how they talked about money
                when bills were due. Applying to college? Back-to-school shopping? What specifically do you remember?
                This shouldn't take long, the first things you remember tell you the most about your relationship
                with money!
            </p>
            {#each [0, 1, 2, 3, 4] as i}
                <input type="text" bind:value={partner1_answers[i]}/>
            {/each}
            <button disabled={!allFilled(partner1_answers)} onclick={goForward}>
                Ready to pass to {partner2.name}?
            </button>
        </div>
    {:else if current_state === 2} <!-- Partner 2 start -->
        <div class="answers">
            <p>
                What are five phrases that you heard growing up that you still hear in your mind today? Think about
                what your parents said when holidays or birthdays were coming around, or how they talked about money
                when bills were due. Applying to college? Back-to-school shopping? What specifically do you remember?
                This shouldn't take long, the first things you remember will tell you the most about your relationship
                with money!
            </p>
            {#each [0, 1, 2, 3, 4] as i}
                <input type="text" bind:value={partner2_answers[i]}/>
            {/each}
            <button disabled={!allFilled(partner2_answers)} onclick={goForward}>
                Ready to compare with {partner1.name}?
            </button>
        </div>
    {:else} <!-- Compare -->
        <div class="comparison">
            <div>
                <h3>{partner1.name}</h3>
                <ol>
                    {#each partner1_answers as answer}
                        <li>{answer}</li>
                    {/each}
                </ol>
            </div>
            <div>
                <h3>{partner2.name}</h3>
                <ol>
                    {#each partner2_answers as answer}
                        <li>{answer}</li>
                    {/each}
                </ol>
            </div>
        </div>
        <p>
            Take turns reading your phrases out loud. Which ones surprised you? Where do you see
            them showing up in how you spend or save today?
        </p>
        <button onclick={() => onsubmit(partner1_answers, partner2_answers)}>Next Section</button>
    {/if}
</div>

<style>
    .answers {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .answers button {
        align-self: flex-start;
    }

    .comparison {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
</style>