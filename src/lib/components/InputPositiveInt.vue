<template>
  <Input
    ref="input"
    type="text"
    :value="inputValue"
    @input="handleInputValue"
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
  props: ['append', 'prepend'],
  methods: {
    handleInputValue(val) {
      if (val === '' || /^\d+$/.test(val)) {
        this.inputValue = val
        this.$emit('input', val)
      }
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
  }
}
</script>
