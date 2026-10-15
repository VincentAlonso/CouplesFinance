<!--
May or may not use this, I'm not sure it's all that useful for two people to consume at once, and the input doesn't seem
transferable to any of the other sections. Maybe just leave as a WIP? Good information but hard to work in.
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

    type money_type = "avoider" | "optimizer" | "worrier" | "dreamer"

    const section_script: string[] = [
            "Personal finance is personal, but realistically speaking most people fit into a few buckets. " +
            "Most of us are mostly the same, and most of us have a core financial identity that helps explain the way " +
            "we behave with money. If we understand ourselves, we can understand how to change! Though this may seem reductive, " +
            "we can learn a lot by understanding what type of person we are when it pertains to money. So we're going to put " +
            "ourselves into four buckets! These types will help hopefully help us identify things we'd like to change - these " +
            " types being: The Avoid, The Optimizer, The Worrier, and The Dreamer",

            "Avoiders use a vareity of conscious and unconscious strategies to deflect and procrastinate when it comes to money. " +
            "Sometimes they know exactly what they're doing. Other times, they're genuinely oblvious to the motivation behind their tactics." +
            " "
        ]
</script>

<div>

</div>