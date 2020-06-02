import Gitalk from './Gitalk.vue';

const install = function (Vue, config = null) {
  Vue.prototype.$gitalkGlobalConfig = config;
  Vue.component('Gitalk', Gitalk)
}

export default { install };
