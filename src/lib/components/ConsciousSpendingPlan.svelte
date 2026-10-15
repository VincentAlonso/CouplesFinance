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

        ]

    //Make a questions array, make an answers array. The questions array maps 1-1 via index to the answers array.
    //Print questions array script text, bind to answers array in text input

    const questions: string[] = [
        "Housing (Utilities, insurance included)",
        "Car (loan, insurance, gas, maintenance)",
        "Medical (health insurance, prescriptions)",
        "Cell phones and internet",
        "Groceries",
        "Essential Clothing",
        "Childrens expenses",
        "Household (drugstore and cleaning supplies, toilet paper)",
        "Pet (medical, food)",
        "Misc",
        "Savings (emergency fund, down payment on house)",
        "Investments (401k, 403b, IRA, HSA, anything else)",
        "Guilt free Spending (Eating out, Nonessential clothing, Health/fitness, Self-care, Subscriptions, Travel, Gifts " +
        "Hobbies, Home decoration and improvement, Housecleaning, Misc"
    ]
    //length = 13

    let answers: string[] = $state([])

    let current_state: number = $state(0)

    function goForward() {
        current_state += 1
    }

    function allFilled(answers: string[]): boolean {
        return [0, 1, 2, 3, 4].every(i => answers[i])
    }
</script>

<div>

</div>