import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h } from 'vue'
import './custom.css'

const theme: Theme = {
    extends: DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'layout-bottom': () =>
                h(
                    'div',
                    {
                        style:
                            'text-align:center; margin-bottom:2rem; font-size:0.85rem; opacity:0.7;',
                    },
                    [
                        'Released under the MIT License.',
                        h('br'),
                        'Copyright © 2025–present Yoga Raditya',
                    ]
                ),
        })
    },
}

export default theme
