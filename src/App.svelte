<script>
  import Config from './components/Config.svelte';
  import MoneyCalc from './components/MoneyCalc.svelte';
  import TimeDelta from './components/TimeDelta.svelte';

  import { totalSum, config } from './storesAndCommon';
</script>

<main>
  <h1>timeCalc</h1>

  <Config />
  <br>
  <TimeDelta mode="subtract"/>
  <br>
  <TimeDelta mode="add"/>
  <br>
  <MoneyCalc totalSum={$totalSum.decimal} batchSize={$config.batchSize} perHour={$config.perHour} batchOffset={$config.batchOffset}/>

  <p>
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    /*text-transform: uppercase;*/
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
