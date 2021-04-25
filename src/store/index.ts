import { createStore } from 'vuex';
import uiModule from '@/store/modules/ui';

export default createStore({
  modules: {
    uiModule,
  },
});
