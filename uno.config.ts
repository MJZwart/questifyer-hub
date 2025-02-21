import {defineConfig, presetWind, presetAttributify, presetTypography} from 'unocss';

export default defineConfig({
    presets: [presetWind(), presetAttributify(), presetTypography()],
    shortcuts: {
        panel: 'bg-nav-panel rounded-lg drop-shadow-lg'
        
    },
    theme: {
        colors: {
            body: '#1a1a1a',
        }
    }
});