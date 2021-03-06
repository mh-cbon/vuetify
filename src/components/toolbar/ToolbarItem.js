import { closestParentTag } from '../../util/helpers'
import GenerateRouteLink from '../../mixins/route-link'

export default {
  name: 'toolbar-item',

  mixins: [GenerateRouteLink],

  props: {
    activeClass: {
      type: String,
      default: 'toolbar__item--active'
    }
  },

  computed: {
    classes () {
      return {
        'toolbar__item': true,
        'toolbar__item--disabled': this.disabled
      }
    },

    listUID () {
      return closestParentTag.call(this, 'v-list')
    }
  },

  methods: {
    click () {
      //
    }
  },

  render (h) {
    const { tag, data } = this.generateRouteLink()

    const item = h(tag, data, [this.$slots.default])

    return h('li', {}, [item])
  }
}
