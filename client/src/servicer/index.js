//- webpack 的require.context 方法 提取模块内容
// requireApi批量自动导入工具
/**
 * require.context()
 * directory: string,    // 要扫描的目录（相对路径）
 * useSubdirectories: boolean, // 是否递归扫描子目录
 * regExp: RegExp         // 匹配文件的正则表达式
 */
const requireApi = require.context('.', true, /.js$/);

const module = {};

requireApi.keys().forEach((key) => {
    if (key === './index.js' || key === './http.js') return;
    Object.assign(module, requireApi(key));
});

export default module;
