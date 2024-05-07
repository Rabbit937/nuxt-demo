export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html, { event }) => {
        html.head.push(`<meta name="description" content="My custom description" />`)
    })

    nitroApp.hooks.hook('render:response', (response, { event }) => {
        console.log(response)
    })
})