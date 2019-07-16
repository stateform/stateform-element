<template>
  <Input
  :type="type || 'text'"
    :disabled="disabled"
    :value="inputValue"
    :autocomplete="autocomplete"
    :name="name"
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
  props: ['type','append', 'prepend', 'autocomplete', 'name'],
  data() {
    return {
      inputValue: undefined
    }
  },
  methods: {
    handleInputValue(val) {
      if (val === '' || val === '+' || val === '-') {
        this.inputValue = val
        return this.$emit('input', undefined)
      }
      if (/^[+-]?((\d+(\.\d*)?)|(\.\d+))$/.test(val)) {
        this.inputValue = val
        this.$emit('input', parseFloat(val))
      }
    }
  },
  created() {
    this.$watch('value', (val) => {
      if (parseFloat(this.inputValue) !== parseFloat(val)) {
        this.inputValue = val
      }
    }, {
      immediate: true
    })
  }
}
</script>
