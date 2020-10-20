<script>
import { h } from 'vue'
export default {
  render() {
    return h(
      'svg',
      {
        class: ['icon-font'],
        'aria-hidden': true,
        style: {
          fontSize: `${this.size}px`,
          color: this.color
        }
      },
      [
        h(
          'use',
          {
            'xlink:href': `#${this.name}`
          }
        )
      ]
    )
  },
  props: {
    name: {
      type: String
    },
    size: {
      type: [Number, String]
    },
    color: {
      type: String
    }
  },
}
</script>
