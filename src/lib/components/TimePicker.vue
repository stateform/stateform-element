<template>
  <TimePicker
    :value="value"
    @on-change="$emit('input', $event)"
  >
  </TimePicker>
</template>

<script>
import FormItem from './FormItem.js'
import {TimePicker} from 'element-ui'
export default {
  mixins: [FormItem],
  components: {
    TimePicker
  }
}
</script>
