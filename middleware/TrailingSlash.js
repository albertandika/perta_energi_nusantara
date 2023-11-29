export default function({route, redirect}) {
    const hasTrailingSlash = /\/$/.test(route.path)
    if (!hasTrailingSlash) {
        redirect(301, `${route.path}/`)
    }
}