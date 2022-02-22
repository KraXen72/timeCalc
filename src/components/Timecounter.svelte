<script>
    let startHr
    let endHr
    let deltaStr = "0h0min"

    import dayjs from "dayjs/esm";
    import customParseFormat from 'dayjs/plugin/customParseFormat';
    dayjs.extend(customParseFormat)

    function _nowTime() {
        let now = new Date()
        endHr = `${zeropad(now.getHours(), 2)}:${zeropad(now.getMinutes(), 2)}`
    }

    function zeropad(number, finalWidth, customCharacter) {
        customCharacter = customCharacter || '0';
        number = number + '';
        return number.length >= finalWidth ? number : new Array(finalWidth - number.length + 1).join(customCharacter) + number;
    }

    function _timeDelta() {
            let startDate = dayjs(startHr.replaceAll(":", "-"), "HH-mm", "sk")
            let endDate = dayjs(endHr.replaceAll(":", "-"), "HH-mm", "sk")
            let delta = endDate.diff(startDate, "m")
            deltaStr = `${zeropad(Math.floor(delta / 60), 2)}h${zeropad(delta % 60, 2)}min`

            console.log({startDate, endDate, delta})    
    }
</script>

<form on:submit|preventDefault={_timeDelta}>
    <span class="timewrap">
        <strong>Start time:</strong>
        <input type="time" name="startTime" class="timeinp" required bind:value={startHr}/>
    </span>
    <span class="timewrap">
        <strong>End time:</strong>
        <input type="time" name="endTime" class="timeinp" required bind:value={endHr}/>
        <button class="nowbtn" type="button" title="now" on:click={_nowTime}>⌚</button>
    </span>
    <div class="timewrap">
        <strong>Difference:</strong> {deltaStr}
        <input type="submit" class="nowbtn" value="Calculate">
    </div>
</form>


<style>
    form {
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