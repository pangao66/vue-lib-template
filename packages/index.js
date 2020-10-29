import Hello from './hello.vue'

Hello.install = Vue => Vue.component(Hello.name, Hello)

export default Hello
