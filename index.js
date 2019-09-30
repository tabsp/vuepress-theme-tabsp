const path = require('path')
// Theme API.
module.exports = (options, ctx) => {
    const {
        postDir = '/posts',
        permalink = '/:year/:month/:day/:slug',
        postLayout = 'Post'
    } = options

    function isPost(postPath) {
        return postPath.startsWith(postDir || '/posts')
    }
    return {
        plugins: [
            ['@vuepress/register-components', {
                componentsDir: [
                    path.resolve(__dirname, 'components')
                ]
            }],
            [
                '@vuepress/last-updated',
                {
                    transformer: timestamp => {
                        const moment = require('moment')
                        moment.locale('zh-CN')
                        return moment(timestamp).format(
                            'YYYY-MM-DD HH:mm:ss'
                        )
                    }
                }
            ]
        ],
        // 拓展文章数据
        extendPageData($page) {
            const {
                _filePath,           // 源文件的绝对路径
                _computed,           // 在构建期访问全局的计算属性，如：_computed.$localePath.
                _content,            // 源文件的原始内容字符串
                _strippedContent,    // 源文件剔除掉 frontmatter 的内容字符串
                key,                 // 页面唯一的 hash key
                frontmatter,         // 页面的 frontmatter 对象
                regularPath,         // 当前页面遵循文件层次结构的默认链接
                relativePath,
                excerpt,
                path,                // 当前页面的实际链接（在 permalink 不存在时，使用 regularPath ）
            } = $page
            if (isPost(`${regularPath}`)) {
                if (excerpt) {
                    $page.excerpt = excerpt.replace(/[\n\r]/g, ' ').replace(/\s+/, ' ').replace(/#/g, '').replace(/<h\/?.+?\/?>/g, '').replace(/<a\/?.+?\/?>/g, '')
                }
                frontmatter.layout = postLayout
                frontmatter.permalink = permalink
            }
        }
    }
}