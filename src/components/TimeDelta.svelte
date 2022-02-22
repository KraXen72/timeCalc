<script>
    let startHr
    let endHr
    let deltaStr = "0h0min"
    let deltaObj = {h: 0, m: 0}

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

    function _minToDecimalHour (min) {
        return (100 / 60) * min
    }

    function _timeDelta() {
            let startDate = dayjs(startHr.replaceAll(":", "-"), "HH-mm", "sk")
            let endDate = dayjs(endHr.replaceAll(":", "-"), "HH-mm", "sk")
            let delta = endDate.diff(startDate, "m")
            deltaObj.h = Math.floor(delta / 60)
            deltaObj.m = delta % 60
            deltaStr = `${zeropad(deltaObj.h, 2)}h${zeropad(deltaObj.m, 2)}min (${zeropad(deltaObj.h, 2)}.${_minToDecimalHour(deltaObj.m).toFixed(0)}h)`

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
        <input type="submit" class="nowbtn" value="Calculate">
        <strong>Difference:</strong> {deltaStr}
    </div>
</form>


<style>
    form, article {
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