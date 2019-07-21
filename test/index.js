import Vue from 'vue/dist/vue.esm.js';
import '../index.scss';
import App from './App.vue';

const app = new Vue(App);

window.addEventListener('load', () => app.$mount('#app'));