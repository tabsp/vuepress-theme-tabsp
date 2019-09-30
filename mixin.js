import { compareDesc, parseISO } from 'date-fns'

function orderPostsByDate(postCollection) {
    return postCollection.sort((a, b) =>
        compareDesc(parseISO(a.frontmatter.date), parseISO(b.frontmatter.date))
    )
}

export default {
    computed: {
        // 生成文章列表对象并排序
        $posts() {
            const { pages } = this.$site
            return orderPostsByDate(
                pages
                    .filter(({ regularPath }) => this.$isPost(`${regularPath}`))
            )
        }
    },
    methods: {
        $isPost(postPath) {
            const {
                themeConfig: { postDir }
            } = this.$site
            return postPath.startsWith(postDir || '/posts')
        }
    }
}