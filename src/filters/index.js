/** * Created by weballan on 2018/10/16. * * 全局化过滤器 * 您还可以在组件定义时的 filters 属性中按需引入 */import Vue from 'vue'import formatDate from './formatDate'    //格式化时间import formatPhone from './formatPhone'  //隐藏手机中间4位数Vue.filter('formatDate',formatDate);Vue.filter('formatPhone',formatPhone);