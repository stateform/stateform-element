<template>
  <Input
    ref="input"
    :type="type || 'text'"
    :name="name"
    v-model="inputValue"
    :autocomplete="autocomplete"
    :disabled="disabled"
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
  data() {
    return {
      inputValue: undefined
    }
  },
  props: ['type','append', 'prepend', 'autocomplete', 'name'],
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
