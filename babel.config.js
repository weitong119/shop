module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [//配置完毕后就可以在main.js里引入你想使用的组件
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ] 
}
