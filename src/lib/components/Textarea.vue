<template>
  <Input
    type="textarea"
    :value="value == undefined ? '' : value"
    v-model="inputValue"
    :placeholder="placeholder"
    :disabled="disabled"
  >
  </Input>
</template>

<script>
import FormItem from './FormItem.js'
export default {
  mixins: [FormItem],
  data() {
    return {
      inputValue: undefined
    }
  },
  created() {
    this.$watch('value', (val) => {
      if (this.inputValue !== val) {
        this.inputValue = val
      }
    }, {
      immediate: true
    })
    this.$watch('inputValue', (val) => {
      this.$emit('input', val)
    })
  }
}
</script>
