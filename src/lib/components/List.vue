<script>
import FormItemMixin from './FormItem.js'
import FormItemLayout from './FormItemLayout.vue'
import { Icon, Button } from 'element-ui'
export default {
  mixins: [FormItemMixin],
  props: ['isAddable', 'addText'],
  methods: {
    removeItem(index) {
      return () => {
        this.$emit('input', this.value.filter((_, idx) => idx !== index ), index)
      }
    },
    addItem() {
      this.$emit('input', (this.value || []).concat(null))
    }
  },
  render() {
    const {layout, cols, label, required, error, help, isAddable, addText} = this
    const slotDefault = this.$slots.default
    const children = slotDefault && slotDefault.map((vnode, index) => {
      return (
        <div
          key={vnode.key}
          class="sf-item-list__item"
        >
          {vnode}
          <a
            class="sf-item-list__remove"
            onClick={this.removeItem(index)}
          >
            <i class="el-icon-remove-outline"></i>
          </a>
        </div>
      )
    })
    return (
      <div>
          { children }
          { isAddable !== false && (
            <Button
              long
              type='dashed'
              icon="el-icon-plus"
              onClick={this.addItem}
            >
              { addText || 'Add Item'}
            </Button>
          )}
      </div>
    )
  }
}
</script>
