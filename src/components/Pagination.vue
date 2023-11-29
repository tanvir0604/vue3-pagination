<style scoped>

</style>

<template>
  <nav aria-label="Page navigation" :class="props.className" v-if="pages.length > 1">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="pageNo == 1?'disabled':''">
        <a class="page-link" href="javascript:;" tabindex="-1" v-on:click="selectPage(1)" v-html="firstButtonText"></a>
      </li>
      <li class="page-item" :class="pageNo == 1?'disabled':''">
        <a class="page-link" href="javascript:;" tabindex="-1" v-on:click="selectPage(pageNo - 1)" v-html="prevButtonText"></a>
      </li>
      <li class="page-item" v-for="(item, index) in pages" :class="item == pageNo?'active disabled':''">
        <a class="page-link" href="javascript:;" v-on:click="selectPage(item)">{{item}}</a>
      </li>
      <li class="page-item" :class="pageNo == totalPages?'disabled':''">
        <a class="page-link" href="javascript:;" v-on:click="selectPage(pageNo + 1)" v-html="nextButtonText"></a>
      </li>
      <li class="page-item" :class="pageNo == totalPages?'disabled':''">
        <a class="page-link" href="javascript:;" v-on:click="selectPage(totalPages)" v-html="lastButtonText"></a>
      </li>
    </ul>
  </nav>
</template>


<script setup lang="ts">
import {ref, onMounted, watch, toRef} from 'vue';
import axios from "axios";

const emits = defineEmits(['update', 'loaderStart', 'loaderEnd']);

const props = defineProps({
  url: { type: String },
  filters:{ type: Object },
  headers:{ type: Object, required: false, default: {} },
  postData:{ type: Object, required: false, default: {} },
  perPage:{ type: Number, default: 20 },
  defaultPageNo:{ type: Number, default: 1 },
  firstButtonText: { type: String, default: 'First' },
  lastButtonText: { type: String, default: 'Last' },
  nextButtonText: { type: String, default: '<i class="fa fa-angle-double-right" style="font-size: 12px;"></i>' },
  prevButtonText: { type: String, default: '<i class="fa fa-angle-double-left" style="font-size: 12px;"></i>' },
  sortBy: { type : Number },
  sortOrder: { type : Number },
  className: { type: String }
});

const pageNo = ref(1);
const pages = ref([]);
const totalItems = ref(0);
const totalPages = ref(0);
const filters = toRef(props, 'filters');
const perPage = toRef(props, 'perPage');
const sortBy = toRef(props, 'sortBy');
const hasLoaderStart = ref(false);
const hasLoaderEnd = ref(false);

onMounted(() =>{
  const instance = getCurrentInstance();
  hasLoaderStart.value = !!instance?.arrts?.loaderStart;
  hasLoaderEnd.value = !!instance?.arrts?.loaderEnd;
  getData();
});

watch(filters, async (newValue, oldvalue) => {
  pageNo.value = 1;
  totalItems.value = 0;
  getData();
});

watch(perPage, async (newValue, oldValue) => {
  pageNo.value = 1;
  totalItems.value = 0;
  getData();
});

watch(sortBy, async (newValue, oldValue) => {
  pageNo.value = 1;
  totalItems.value = 0;
  getData();
});

const getData = () => {
  if(hasLoaderStart.value){
    emits('loaderStart');
  }

  let that = this;
  let formdata = new URLSearchParams();

  for(var key in props.postData){
    formdata.append(key, props.postData[key]);
  }

  formdata.append('filters',JSON.stringify(props.filters));
  formdata.append('total_items', totalItems.value);
  formdata.append('perpage', props.perPage);
  formdata.append('page_no', pageNo.value);
  formdata.append('sort_by', props.sortBy);
  formdata.append('sort_order', props.sortOrder);
  if(typeof csrf_name !== 'undefined'){
    formdata.append(csrf_name,csrf_hash);
  }
  axios.post(props.url, formdata, {headers: props.headers})
      .then(function (response) {
        if(response.status == 200){
          if(totalItems.value == 0) {
            totalItems.value = response.data.total_items;
            processPageNo();
          }
          emits('update', response.data);
        }
        if(props.showLoader){
          // savingModal(0);
        }
      }).catch(function (error) {
        console.log(error);
      }).finally(function () {
        if(hasLoaderEnd.value){
          emits('loaderEnd');
        }
      }
  );
};

const processPageNo = () => {
  pages.value = [];
  let start1 = 0;
  let end1 = 0;
  if(totalItems.value == 0 || props.perPage == 0){
    return false;
  }
  totalPages.value = Math.ceil(totalItems.value/props.perPage);
  if(pageNo.value > totalPages.value){
    pageNo.value = totalPages.value;
    getData();
  }
  if(totalPages.value <= 7){
    start1 = 1;
    end1 = totalPages.value;
  }else{
    start1 = pageNo.value - 3;
    end1 = pageNo.value + 3;
    if(start1 < 1) start1 = 1;
    if(end1 > totalPages.value) end1 = totalPages.value;

    if(end1-start1 < 6){
      if(start1 == 1) end1 += 6-(end1-start1);
      else if(end1 == totalPages.value) start1 -= 6-(end1-start1)
    }
  }
  for(let i=start1; i<=end1; i++){
    pages.value.push(i);
  }
};


const selectPage = (page_no) => {
  pageNo.value = page_no;
  getData();
  processPageNo();
};
</script>

