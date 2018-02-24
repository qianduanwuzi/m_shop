import Vue from 'vue';
import componentsArray from "~/config/components";

componentsArray.forEach(component => {
  Vue.component(component.name, component.instance)
})