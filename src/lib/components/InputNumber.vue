<template>
  <Input
    :type="type || 'text'"
    :value="value"
    :disabled="disabled"
    @input="handleInputValue"
    :placeholder="placeholder"
  >
    <span 
      v-if="prepend" 
      slot="prepend"
    >
      {{prepend}}
    </span>
    <span 
      v-if="append" 
      slot="append"
    >
      {{append}}
    </span>
  </Input>
</template>

<script>
import FormItem from './FormItem.js'
export default {
  mixins: [FormItem],
  props: ['type','append', 'prepend'],
  methods: {
    handleInputValue(val) {
      if (/^[+-]?((\d+(\.\d*)?)|(\.\d+))$/.test(val)) {
        val = parseFloat(val)
      }
      this.$emit('input', val)
    }
  }
}
</script>
