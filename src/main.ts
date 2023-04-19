import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App);

app.use(store);
app.use(router);

// create a directive that animate an element when it is scrolled into view.
app.directive('scroll-animate', {
    mounted(el, binding) {
        const elementTop = el.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        const elementVisible = elementTop < viewportHeight;
        if (elementVisible) {
            el.classList.add(binding.value);
        } else {
            el.classList.remove(binding.value);
        }
        el.addEventListener('scroll', () => {
            const elementTop = el.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;
            const elementVisible = elementTop < viewportHeight;
            if (elementVisible) {
                el.classList.add(binding.value);
            } else {
                el.classList.remove(binding.value);
            }
        });
    }
});

app.mount('#app')
