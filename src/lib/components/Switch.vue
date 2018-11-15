<template>
  <ISwitch
    :value="value"
    :active-text="onText"
    :inactive-text="offText"
    @input="$emit('input', $event)"
  >
  </ISwitch>
</template>

<script>
import FormItem from './FormItem.js'
export default {
  mixins: [FormItem],
  props: ['onText', 'offText'],
}
</script>
