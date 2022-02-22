<script>
    import { config } from "../stores"
    let currConfig = {
        perHour: 8,
        batchSize: 100
    }
    const names = {
        perHour: "€/h",
        batchSize: "€/payout"
    }

</script>
    <div id="flexer">
        <strong>Settings:</strong>
        {#each Object.keys(currConfig) as opt}
            <div class="flexitem">
                {names[opt]}:
                <input type="number" bind:value={currConfig[opt]}/>
            </div>
        {/each}
    </div>

<style>
    #flexer {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 1rem;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type="number"] {
        -moz-appearance: textfield;
    }
</style>