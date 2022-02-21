// vue.config.js file to be placed in the root of your repository

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        // same as '<the-project-name>'
        ? '/week6-vue3-2022/w6-routes-table1/'
        : '/'
}