<script>
    import dayjs from "dayjs/esm";
    import customParseFormat from 'dayjs/plugin/customParseFormat';
    dayjs.extend(customParseFormat)
    import { zeropad, todayObj, totalSum } from "../storesAndCommon";

    let startHr
    let endHr

    let deltaStr = "0h0min"
    let deltaObj = {h: 0, m: 0}

    let totalHr
    let todayHr
    let addObj = {h: 0, m: 0}
    let addStr = "0h0min"

    export let mode = "subtract"

    function _nowTime() {
        let now = new Date()
        endHr = `${zeropad(now.getHours(), 2)}:${zeropad(now.getMinutes(), 2)}`
    }

    function _minToDecimalHour (min) {
        return (100 / 60) * min
    }

    function calculate() {
        if (mode === "subtract") { 
            _timeDelta()
        } else {
            _timeAdd()
        }
    }

    function _timeDelta() {
        let startDate = dayjs(startHr.replaceAll(":", "-"), "HH-mm", "sk")
        let endDate = dayjs(endHr.replaceAll(":", "-"), "HH-mm", "sk")
        let delta = endDate.diff(startDate, "m")
        deltaObj.h = Math.floor(delta / 60)
        deltaObj.m = delta % 60
        deltaStr = `${zeropad(deltaObj.h, 2)}h${zeropad(deltaObj.m, 2)}min (${zeropad(deltaObj.h, 2)}.${_minToDecimalHour(deltaObj.m).toFixed(0)}h)`
        $todayObj = deltaObj

        console.log({startDate, endDate, delta})    
    }

    function _timeAdd() {
        let hours = parseInt(totalHr.split(":")[0]) + parseInt(todayHr.split(":")[0])
        let minutes = parseInt(totalHr.split(":")[1]) + parseInt(todayHr.split(":")[1])
        let hoursInMinutes = Math.floor(minutes / 60)
        minutes -= (hoursInMinutes * 60)
        hours += hoursInMinutes
        
        addObj.h = hours
        addObj.m = minutes

        addStr = `${zeropad(addObj.h, 2)}h${zeropad(addObj.m, 2)}min (${zeropad(addObj.h, 2)}.${_minToDecimalHour(addObj.m).toFixed(0)}h)`

        $totalSum = {h: hours, m: minutes, decimal: parseFloat(`${addObj.h}.${_minToDecimalHour(addObj.m).toFixed(0)}`)}
        console.log($totalSum.decimal)
    }

    function _todayTime() {
        todayHr = `${zeropad($todayObj.h, 2)}:${zeropad($todayObj.m, 2)}`
    }

    function _nextOp() {
        totalHr = `${zeropad(addObj.h, 2)}:${zeropad(addObj.m, 2)}`
    }
</script>

<hr>
<form on:submit|preventDefault={calculate}>
    <span class="timewrap start">
        {#if mode === "subtract"}
            <strong>Start time:</strong><br>
            <input type="time" name="startTime" class="timeinp" required bind:value={startHr}/>
        {:else}
            <strong>Total time:</strong><br>
            <input type="text" name="startTime" class="timeinp" placeholder="HH:mm" required bind:value={totalHr} autocomplete="off"/>
        {/if} 
    </span>
    <span class="timewrap end">
        {#if mode === "subtract"}
            <strong>End time:</strong>
            <input type="time" name="endTime" class="timeinp" required bind:value={endHr}/>
            <button class="nowbtn" type="button" title="now" on:click={_nowTime}>⌚</button>
        {:else}
            <strong>Today's time: </strong>
            <input type="text" name="startTime" class="timeinp" placeholder="HH:mm" required bind:value={todayHr} autocomplete="off"/>
            <button class="nowbtn" type="button" title="copy the time from the difference above" on:click={_todayTime}>📅</button>
        {/if} 
    </span>
    {#if mode === "subtract"}
        <div class="timewrap result">
            <input type="submit" class="nowbtn" value="Calculate">
            <strong>Difference:</strong> {deltaStr}
        </div>
    {:else}
        <div class="timewrap result">
            <input type="submit" class="nowbtn" value="Add">
            <strong>Together:</strong> {addStr}
            <button class="nowbtn" type="button" title="add to the result" on:click={_nextOp}>⏪</button>
        </div>
    {/if}
</form>


<style>
    form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: "start end"
        "result result" ;

        column-gap: .7rem;
        row-gap: 1rem;
        justify-content: baseline !important;
    }
    .timewrap {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        column-gap: .2rem;
        row-gap: .15rem;
    }

    .timewrap strong {
        width: 100%;
    }

    .timewrap.start {
        grid-area: start;
    }
    .timewrap.end {
        grid-area: end;
    }
    .timewrap.result {
        grid-area: result;
        flex-wrap: nowrap;
        justify-content: center;
        column-gap: 1rem;
    }
    .timewrap.result strong {
        width: max-content;
    }
    .timewrap.result .nowbtn {
        flex-grow: 1;
        width: 100% !important;
    }

    @media only screen and (min-width: 896px) {
        form {
            grid-template-rows: 1fr;
            grid-template-columns: repeat(3, 1fr);
            grid-template-areas: "start end result"
        }
        .timewrap {
            flex-wrap: nowrap;
            column-gap: .2rem;
        }
        .timewrap strong {
            width: max-content
        }
    }
    
</style>