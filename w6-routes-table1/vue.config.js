// vue.config.js file to be placed in the root of your repository

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        // name of repo
        ? '/week6-vue3-2022/'
        : '/'
}