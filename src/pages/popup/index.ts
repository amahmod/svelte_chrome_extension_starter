import { mount } from 'svelte'
import App from './components/App.svelte'
import './index.css'

export const app = mount(App, {
    target: document.getElementById('app') as HTMLElement
})
