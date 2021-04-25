module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/styles/modules/variables.scss";',
      },
    },
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
};