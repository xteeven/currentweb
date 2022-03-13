import { defineClientAppEnhance } from '@vuepress/client'


import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/line-awesome/line-awesome.css';
import '@quasar/extras/roboto-font/roboto-font.css';
import 'quasar/src/css/index.sass';
import './styles/index.scss';

//import * as Icons from 'element-plus/icons-vue'


export default defineClientAppEnhance(async (enhance) => {
    import('quasar').then((quasarModule) => {
      enhance.app.use(quasarModule.Quasar);
    });
  });