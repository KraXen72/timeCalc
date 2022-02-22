<script>
    export let totalSum = 0
    export let perHour = 0
    export let batchSize = 0
    export let batchOffset = 0

    let display
    
    $: {
        if (batchOffset === 0) {
            display = `${totalSum.toFixed(2)}h * ${perHour}€ = ${totalSum * perHour}€ / ${batchSize}€`
        } else {
            display = `(${totalSum.toFixed(2)}h * ${perHour}€) + <strong>${batchOffset}€</strong> = ${(totalSum * perHour) + batchOffset}€ / ${batchSize}€`
        }
    }
</script>

<article>
    <span class="timewrap">
            <strong>Total money: </strong>
            {@html display}
            <!-- <input type="text" name="startTime" class="timeinp" placeholder="HH:mm" required autocomplete="off"/> -->
    </span>
</article>

<style>
    /* your styles go here */
</style>