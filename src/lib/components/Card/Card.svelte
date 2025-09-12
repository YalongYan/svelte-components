<script>
  export let variant = 'default'; // default, elevated, outlined
  export let padding = 'medium'; // none, small, medium, large
  export let hoverable = false;
  export let clickable = false;
  
  $: classes = [
    'card',
    `card--${variant}`,
    `card--padding-${padding}`,
    hoverable ? 'card--hoverable' : '',
    clickable ? 'card--clickable' : ''
  ].filter(Boolean).join(' ');
</script>

<div 
  class={classes}
  on:click
  on:keydown
  role={clickable ? 'button' : 'presentation'}
  tabindex={clickable ? 0 : undefined}
>
  <slot />
</div>

<style>
  .card {
    background: white;
    border-radius: 12px;
    transition: all 0.2s ease;
    position: relative;
    overflow: hidden;
  }

  /* Variants */
  .card--default {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .card--elevated {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .card--outlined {
    border: 1px solid #e2e8f0;
    box-shadow: none;
  }

  /* Padding */
  .card--padding-none {
    padding: 0;
  }

  .card--padding-small {
    padding: 12px;
  }

  .card--padding-medium {
    padding: 20px;
  }

  .card--padding-large {
    padding: 32px;
  }

  /* Interactive states */
  .card--hoverable:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .card--clickable {
    cursor: pointer;
  }

  .card--clickable:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .card--clickable:focus {
    outline: 2px solid #667eea;
    outline-offset: 2px;
  }

  .card--clickable:active {
    transform: translateY(0);
  }
</style>
