<template>
  <Row class="sf-item--Form">
    <Form @submit.native="handleSubmit">
        <slot name="default"></slot>
        <FormItemLayout 
          class="sf-footer"
          v-if="footer"
          :layout="layout"
          :cols="footer.cols || cols"
        >
          <Button 
            class="sf-footer__submit"
            v-if="footer.showSubmit === true"
            native-type="submit"
            type="primary"
            :disabled="footer.disableSubmit"
          >
            {{footer.submitText || 'Submit'}}
          </Button>
          <Button 
            class="sf-footer__reset"
            v-if="footer.showReset === true"
            @click="$emit('reset')" 
            :disabled="footer.disableReset"
          >
            {{footer.resetText || 'Reset'}}
          </Button>
        </FormItemLayout>
    </Form>
  </Row>
</template>

<script>
import { Row, Form, Button } from 'element-ui'
import FormItemLayout from './FormItemLayout.vue'
export default {
  components: {
    Form,
    Row,
    Button,
    FormItemLayout
  },
  props: ['layout', 'cols', 'footer'],
  methods: {
    handleSubmit(event) {
      event.preventDefault()
      this.$emit('submit')
    }
  }
}
</script>
