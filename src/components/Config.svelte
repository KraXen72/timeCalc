<script>
    import { config } from "../storesAndCommon"
    let currConfig = {
        perHour: 8,
        batchSize: 100,
        batchOffset: 0
    }
    const names = {
        perHour: "€/h",
        batchSize: "€/payout",
        batchOffset: "offset current batch? (€)"
    }
    $: $config = currConfig

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
        row-gap: .5rem;

        flex-wrap: wrap;
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

    strong {
        width: 100%;
    }
</style>