// called after every page is created

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions

    if (page.path.match(/^\/app/)) {
        page.matchPath = "/app/*"
        
        // update the page
        createPage(page)
    }
}