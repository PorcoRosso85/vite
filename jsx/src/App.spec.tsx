import { test, expect } from '@playwright/experimental-ct-react';
import App from './App';

test('Appコンポーネントが正しくレンダリングされること', async ({ mount }) => {
    const component = await mount(<App />);
    await expect(component).toContainText('Vite');
    await expect(component).toContainText('React');
});  
