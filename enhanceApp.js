import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import mixin from './mixin';
export default ({
  Vue, router
}) => {
  Vue.use(ElementUI)
  Vue.mixin({
    computed: {
      ...mixin.computed,
    },
    methods: {
      ...mixin.methods,
    }
  })

}