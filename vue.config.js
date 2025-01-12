const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/miportfolio/' // Reemplaza <repo-name> por el nombre de tu repositorio
    : '/'
})

