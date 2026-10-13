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
        "How does your life look like without worrying about money? What do you do? When do you wake up? Who do you do it with?",
        "What is important to you? Is it food, fitness, family? Is it experiences like vacations, books, or movies?",

        "Now that you've thought of what is important to you, now get more specific. If you are interested in fitness, " +
        "where would you work out? At that gym with all the cool workout equipment and nice protein smoothie bar? Or maybe" +
        " you feel like you're plateauing and want to hire a personal trainer to get you that extra motivation and knowledge.",

        "If you love vacations, where exactly would you go? What would you do each day? Would you spend the day in France " +
        "eating at a different bakery every hour? Or go to dinner with each other at a fancy restaurant after spending the day " +
        "walking the streets of Paris?",

        "Do you love gaming, and want to support smaller studios via goFundme or by buying all their DLC (personal bias here!)?" +
        " What is important. Be specific, even down to an hourly schedule!"
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
    {#if current_state === 0 }
        <Slides script={section_script} ondone={goForward}></Slides>
    {:else if current_state === 1}
        <div>

        </div>
    {/if}
</div>