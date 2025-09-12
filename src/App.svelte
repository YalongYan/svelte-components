<script>
  import Button from './lib/components/Button/Button.svelte';
  import Card from './lib/components/Card/Card.svelte';
  import Input from './lib/components/Input/Input.svelte';
  
  let inputValue = '';
  let showToast = false;
  
  function handleButtonClick() {
    showToast = true;
    setTimeout(() => showToast = false, 3000);
  }
</script>

<main>
  <div class="container">
    <h1>🎨 点点组件库</h1>
    <p class="subtitle">基于 Svelte 4 的现代化组件库</p>
    
    <div class="section">
      <h2>按钮组件 (Button)</h2>
      <div class="component-showcase">
        <div class="button-group">
          <Button variant="primary" on:click={handleButtonClick}>Primary</Button>
          <Button variant="secondary" on:click={handleButtonClick}>Secondary</Button>
          <Button variant="danger" on:click={handleButtonClick}>Danger</Button>
          <Button variant="success" on:click={handleButtonClick}>Success</Button>
        </div>
        
        <div class="button-group">
          <Button size="small" on:click={handleButtonClick}>Small</Button>
          <Button size="medium" on:click={handleButtonClick}>Medium</Button>
          <Button size="large" on:click={handleButtonClick}>Large</Button>
        </div>
        
        <div class="button-group">
          <Button loading on:click={handleButtonClick}>Loading</Button>
          <Button disabled on:click={handleButtonClick}>Disabled</Button>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>卡片组件 (Card)</h2>
      <div class="card-grid">
        <Card variant="default">
          <h3>默认卡片</h3>
          <p>这是一个默认样式的卡片组件，具有简洁的设计和适度的阴影效果。</p>
        </Card>
        
        <Card variant="elevated" hoverable>
          <h3>悬浮卡片</h3>
          <p>这是一个具有悬浮效果的卡片，鼠标悬停时会有动画效果。</p>
        </Card>
        
        <Card variant="outlined" clickable>
          <h3>可点击卡片</h3>
          <p>这是一个可点击的卡片，具有边框样式和交互效果。</p>
        </Card>
      </div>
    </div>
    
    <div class="section">
      <h2>输入框组件 (Input)</h2>
      <div class="component-showcase">
        <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
          <Input 
            label="用户名" 
            placeholder="请输入用户名"
            bind:value={inputValue}
          />
          
          <Input 
            label="邮箱地址" 
            type="email"
            placeholder="请输入邮箱"
            icon="📧"
            iconPosition="left"
          />
          
          <Input 
            label="密码" 
            type="password"
            placeholder="请输入密码"
            icon="🔒"
            iconPosition="right"
          />
          
          <Input 
            label="搜索" 
            placeholder="搜索内容..."
            icon="🔍"
            iconPosition="left"
          />
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>组合示例</h2>
      <div class="card-grid">
        <Card variant="elevated" padding="large">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <h3 style="margin: 0;">用户登录</h3>
            <span style="background: #667eea; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">NEW</span>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <Input 
              label="用户名" 
              placeholder="请输入用户名"
              icon="👤"
              iconPosition="left"
            />
            <Input 
              label="密码" 
              type="password"
              placeholder="请输入密码"
              icon="🔒"
              iconPosition="right"
            />
            <Button variant="primary" block>登录</Button>
          </div>
        </Card>
        
        <Card variant="outlined" padding="large">
          <h3 style="margin-top: 0;">联系表单</h3>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <Input 
              label="姓名" 
              placeholder="请输入您的姓名"
              required
            />
            <Input 
              label="邮箱" 
              type="email"
              placeholder="请输入邮箱地址"
              required
            />
            <Input 
              label="电话" 
              type="tel"
              placeholder="请输入电话号码"
            />
            <div style="display: flex; gap: 8px;">
              <Button variant="primary">提交</Button>
              <Button variant="secondary">重置</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
  
  {#if showToast}
    <div class="toast">
      <span>🎉 按钮点击成功！</span>
    </div>
  {/if}
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

  .toast {
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    animation: slideIn 0.3s ease-out;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
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
    
    .toast {
      right: 10px;
      left: 10px;
      top: 10px;
    }
  }
</style>
