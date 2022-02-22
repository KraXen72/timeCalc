<script>
    // your script goes here
    let startHr
    let endHr
    let deltaStr = "0h0min"

    function _nowTime() {
        let now = new Date()
        endHr = `${zeropad(now.getHours(), 2)}:${zeropad(now.getMinutes(), 2)}`
    }

    function zeropad(number, finalWidth, customCharacter) {
        customCharacter = customCharacter || '0';
        number = number + '';
        return number.length >= finalWidth ? number : new Array(finalWidth - number.length + 1).join(customCharacter) + number;
    }

    function _timeDelta(start, end) {
        
    }
</script>

<article>
    <span class="timewrap">
        <strong>Start time:</strong>
        <input type="time" class="timeinp" bind:value={startHr} placeholder="hours"/>
    </span>
    <span class="timewrap">
        <strong>End time:</strong>
        <input type="time" class="timeinp" bind:value={endHr} placeholder="hours"/>
        <button class="nowbtn" title="now" on:click={_nowTime}>⌚</button>
    </span>
    <div class="timewrap">
        <strong>Difference:</strong> {deltaStr}
        <button class="nowbtn">Calculate</button>
    </div>
</article>


<style>
    article {
        display: flex;
        column-gap: 1.2rem;
        justify-content: center;
    }
    .timeinp {
        max-width: 5rem;
    }
    .nowbtn {
        padding: 0.5em 1em;
        max-width: min-content;
    }
</style>