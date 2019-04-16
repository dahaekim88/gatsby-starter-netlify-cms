/* global window, document */
import { CHANNEL_IO_KEY } from "../keys"

export default () => {
  ;(() => {
    if (window.CHPlugin) {
      return (
        window.console &&
        console.error &&
        console.error("Channel Plugin script included twice.")
      )
    }
    const ch = { q: [] }
    ;[
      "initialize",
      "checkIn",
      "checkOut",
      "show",
      "hide",
      "showLauncher",
      "hideLauncher",
      "track",
    ].forEach(e => {
      ch[e] = (...n) => {
        n.unshift(e)
        ch.q.push(n)
      }
    })
    window.CHPlugin = ch
    document.body.innerHTML += '<div id="ch-plugin"></div>'
    const asyncLoad = () => {
      const s = document.createElement("script")
      s.type = "text/javascript"
      s.async = true
      s.src = "//cdn.channel.io/plugin/ch-plugin-web.js"
      s.charset = "UTF-8"
      const x = document.getElementsByTagName("script")[0]
      x.parentNode.insertBefore(s, x)
    }

    if (window.attachEvent) {
      return window.attachEvent("onload", asyncLoad)
    }
    return window.addEventListener("load", asyncLoad, false)
  })()

  window.CHPlugin.initialize({
    plugin_id: CHANNEL_IO_KEY,
    hide_default_launcher: false,
  })

  window.CHPlugin.checkIn()
}
