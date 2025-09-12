<script>
  export let value = '';
  export let placeholder = '';
  export let type = 'text'; // text, email, password, number, tel, url
  export let size = 'medium'; // small, medium, large
  export let variant = 'default'; // default, filled, outlined
  export let disabled = false;
  export let readonly = false;
  export let required = false;
  export let error = false;
  export let success = false;
  export let label = '';
  export let helperText = '';
  export let errorText = '';
  export let icon = '';
  export let iconPosition = 'left'; // left, right
  
  let inputElement;
  
  $: classes = [
    'input-wrapper',
    `input-wrapper--${size}`,
    `input-wrapper--${variant}`,
    error ? 'input-wrapper--error' : '',
    success ? 'input-wrapper--success' : '',
    disabled ? 'input-wrapper--disabled' : '',
    readonly ? 'input-wrapper--readonly' : '',
    icon ? `input-wrapper--with-icon input-wrapper--icon-${iconPosition}` : ''
  ].filter(Boolean).join(' ');
  
  $: hasError = error || errorText;
  $: displayHelperText = hasError ? errorText : helperText;
  
  function handleInput(event) {
    value = event.target.value;
  }
  
  function focus() {
    inputElement?.focus();
  }
</script>

<div class={classes}>
  {#if label}
    <label class="input-label" on:click={focus} role="presentation">
      {label}
      {#if required}
        <span class="input-required">*</span>
      {/if}
    </label>
  {/if}
  
  <div class="input-container">
    {#if icon && iconPosition === 'left'}
      <span class="input-icon input-icon--left">{icon}</span>
    {/if}
    
    <input
      bind:this={inputElement}
      value={value}
      type={type}
      {placeholder}
      {disabled}
      {readonly}
      {required}
      class="input-field"
      on:input={handleInput}
      on:focus
      on:blur
      on:keydown
      on:keyup
    />
    
    {#if icon && iconPosition === 'right'}
      <span class="input-icon input-icon--right">{icon}</span>
    {/if}
  </div>
  
  {#if displayHelperText}
    <div class="input-helper">
      {displayHelperText}
    </div>
  {/if}
</div>

<style>
  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .input-label {
    font-size: 14px;
    font-weight: 500;
    color: #374151;
    cursor: pointer;
  }

  .input-required {
    color: #ef4444;
    margin-left: 2px;
  }

  .input-container {
    position: relative;
    display: flex;
    align-items: center;
  }

  .input-field {
    width: 100%;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-family: inherit;
    font-size: 16px;
    transition: all 0.2s ease;
    background: white;
  }

  .input-field:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  .input-field::placeholder {
    color: #9ca3af;
  }

  /* Sizes */
  .input-wrapper--small .input-field {
    padding: 6px 12px;
    font-size: 14px;
    min-height: 32px;
  }

  .input-wrapper--medium .input-field {
    padding: 8px 16px;
    font-size: 16px;
    min-height: 40px;
  }

  .input-wrapper--large .input-field {
    padding: 12px 20px;
    font-size: 18px;
    min-height: 48px;
  }

  /* Variants */
  .input-wrapper--filled .input-field {
    background: #f9fafb;
    border-color: #e5e7eb;
  }

  .input-wrapper--outlined .input-field {
    border-width: 2px;
  }

  /* States */
  .input-wrapper--error .input-field {
    border-color: #ef4444;
  }

  .input-wrapper--error .input-field:focus {
    border-color: #ef4444;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }

  .input-wrapper--success .input-field {
    border-color: #10b981;
  }

  .input-wrapper--success .input-field:focus {
    border-color: #10b981;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }

  .input-wrapper--disabled .input-field {
    background: #f3f4f6;
    color: #9ca3af;
    cursor: not-allowed;
  }

  .input-wrapper--readonly .input-field {
    background: #f9fafb;
    cursor: default;
  }

  /* Icon styles */
  .input-wrapper--with-icon .input-field {
    padding-left: 40px;
  }

  .input-wrapper--icon-right .input-field {
    padding-left: 16px;
    padding-right: 40px;
  }

  .input-icon {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6b7280;
    font-size: 16px;
    pointer-events: none;
  }

  .input-icon--left {
    left: 12px;
  }

  .input-icon--right {
    right: 12px;
  }

  .input-wrapper--error .input-icon {
    color: #ef4444;
  }

  .input-wrapper--success .input-icon {
    color: #10b981;
  }

  /* Helper text */
  .input-helper {
    font-size: 12px;
    margin-top: 2px;
  }

  .input-wrapper--error .input-helper {
    color: #ef4444;
  }

  .input-wrapper--success .input-helper {
    color: #10b981;
  }

  .input-wrapper:not(.input-wrapper--error):not(.input-wrapper--success) .input-helper {
    color: #6b7280;
  }
</style>
