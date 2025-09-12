// Component Library Entry Point
export { default as Button } from './components/Button/Button.svelte';
export { default as Card } from './components/Card/Card.svelte';
export { default as Input } from './components/Input/Input.svelte';

// You can also export component configurations or utilities here
export const componentConfig = {
  version: '1.0.0',
  theme: {
    primary: '#667eea',
    secondary: '#764ba2',
    success: '#10b981',
    danger: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6'
  }
};
