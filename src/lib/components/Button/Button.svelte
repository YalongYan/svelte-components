<script>
  export let variant = 'primary'; // primary, secondary, danger, success
  export let size = 'medium'; // small, medium, large
  export let disabled = false;
  export let loading = false;
  export let block = false;
  export let text = '';
  
  $: classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    disabled ? 'btn--disabled' : '',
    loading ? 'btn--loading' : '',
    block ? 'btn--block' : ''
  ].filter(Boolean).join(' ');
</script>

<button 
  class={classes} 
  {disabled} 
  on:click
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
>
  {#if loading}
    <span class="btn__spinner"></span>
  {/if}
  <span class="btn__content">
    <slot />
    {text}
  </span>
</button>

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: none;
    border-radius: 6px;
    font-family: inherit;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;
    position: relative;
    overflow: hidden;
  }

  .btn:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  /* Variants */
  .btn--primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);
  }

  .btn--primary:hover:not(.btn--disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(102, 126, 234, 0.4);
  }

  .btn--primary:focus {
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
  }

  .btn--secondary {
    background: #f8fafc;
    color: #334155;
    border: 1px solid #e2e8f0;
  }

  .btn--secondary:hover:not(.btn--disabled) {
    background: #f1f5f9;
    border-color: #cbd5e1;
  }

  .btn--secondary:focus {
    box-shadow: 0 0 0 3px rgba(148, 163, 184, 0.3);
  }

  .btn--danger {
    background: #ef4444;
    color: white;
    box-shadow: 0 2px 4px rgba(239, 68, 68, 0.3);
  }

  .btn--danger:hover:not(.btn--disabled) {
    background: #dc2626;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(239, 68, 68, 0.4);
  }

  .btn--danger:focus {
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.3);
  }

  .btn--success {
    background: #10b981;
    color: white;
    box-shadow: 0 2px 4px rgba(16, 185, 129, 0.3);
  }

  .btn--success:hover:not(.btn--disabled) {
    background: #059669;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(16, 185, 129, 0.4);
  }

  .btn--success:focus {
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.3);
  }

  /* Sizes */
  .btn--small {
    padding: 6px 12px;
    font-size: 14px;
    min-height: 32px;
  }

  .btn--medium {
    padding: 8px 16px;
    font-size: 16px;
    min-height: 40px;
  }

  .btn--large {
    padding: 12px 24px;
    font-size: 18px;
    min-height: 48px;
  }

  /* States */
  .btn--disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  .btn--loading {
    cursor: wait;
  }

  .btn--block {
    width: 100%;
  }

  /* Loading spinner */
  .btn__spinner {
    width: 16px;
    height: 16px;
    border: 2px solid transparent;
    border-top: 2px solid currentColor;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .btn__content {
    display: flex;
    align-items: center;
    gap: 8px;
  }
</style>
