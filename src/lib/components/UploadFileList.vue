<template>
  <div :class="'sf-upload-list sf-upload-list--' + listType">
    <div 
      v-for="(item, index) in fileList" 
      :key="index"
      :class="'sf-upload-item sf-upload-item--' + item.status"
    >
         
        <div v-if="listType === 'picture'" class="sf-upload-item sf-upload-item__thumbnail">
          <img class="sf-upload-item__thumbnail-img" :src="item.thumbUrl || item.url" />
        </div>
        <span v-else class="sf-upload-item__icon">
          <i class="el-icon-document"></i>
        </span>
        <a 
          v-if="item.url" 
          class="sf-upload-item__name" 
          target="_blank" 
          :href="item.url"
        >
          {{ item.name }}
        </a>
        <Tooltip 
          v-else
          class="sf-upload-item__name"
          :content="item.error"
          effect="dark"
          placement="top"
        >
          <span>{{ item.name }}</span>
        </Tooltip>
        <a class="sf-upload-item__remove" @click="$emit('on-remove', item)" > 
          <i class="el-icon-close"></i>  
        </a>
    </div>
  </div>
</template>
<script>
import {Tooltip} from 'element-ui'
export default {
  components: {Tooltip},
  props: ['listType', 'fileList']
}
</script>
