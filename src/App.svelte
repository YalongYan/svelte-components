<script>
  // import Button from './lib/components/Button/Button.svelte';
  // import Card from './lib/components/Card/Card.svelte';
</script>

<main>
  <div class="container">
    <h1>🎨 点点组件库</h1>
  </div>
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #f8fafc;
    color: #1e293b;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    text-align: center;
    font-size: 1.25rem;
    color: #64748b;
    margin-bottom: 3rem;
  }

  .section {
    margin-bottom: 4rem;
  }

  .section h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #334155;
  }

  .component-showcase {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .button-group {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    .container {
      padding: 1rem;
    }
    
    h1 {
      font-size: 2rem;
    }
    
    .button-group {
      flex-direction: column;
    }
    
    .card-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
