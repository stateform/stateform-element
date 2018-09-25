<template>
  <CheckboxGroup
    :value="inputValue"
    @input="updateInputValue"
  >
    <Checkbox 
      v-for="(val, key) in option" 
      :key="val" 
      :label="val"
      :disabled="disabledItems[key]"
    >
      {{ key }}
    </Checkbox>
  </CheckboxGroup>
</template>

<script>
import FormItem from './FormItem.js'
export default {
  mixins: [FormItem],
  data() {
    return {
      inputValue: []
    }
  },
  props: {
    option: {
      type: Object
    },
    disabledItems: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    updateInputValue(value) {
      if (value !== this.inputValue) {
        this.inputValue = value
      }
    },
    updateValue(value) {
      this.$emit('input', this.path, value)
    }
  },
  created() {
    if (this.value) {
      this.updateInputValue(this.value)
    }
    this.$watch('inputValue', this.updateValue)
    this.$watch('value', this.updateInputValue)
  }
}
</script>
