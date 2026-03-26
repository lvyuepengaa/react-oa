import { defineConfig } from 'umi';
const {resolve} = require('path')

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: { immer: true }, // Dva/Redux 有一个死规定：不能直接修改 state！ 一个 JS 库，让你用「直接修改数据」的写法
  alias: {
    // api: resolve(__dirname, './src/services/'), 
    components: resolve(__dirname, './src/components'),
    common: resolve(__dirname, './src/common'),
    // config: resolve(__dirname, './src/utils/config'),
    // themes: resolve(__dirname, './src/themes'),
    utils: resolve(__dirname, './src/utils'),
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
});
