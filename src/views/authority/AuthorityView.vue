<template>
  <div>
    <el-tree
        :data="authority_list"
        show-checkbox
        node-key="roleId"
        :check-strictly="true"
        :default-checked-keys="authority"
        ref="tree_ref"
        :props="{
          children: 'roleList',
          label: 'name'
        }"
    />
    <el-button @click="changeAuthority">确认修改</el-button>
    <el-button @click="back">返回</el-button>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, toRefs} from 'vue';
import {useRoute} from "vue-router";
import {AuthorityPage} from "@/type/authority";
import {getAuthorityList} from "@/request/api";
import router from '@/router';

export default defineComponent({
  setup () {

    onMounted(() => {
      getAuthorityList().then((res: { data: { data: any; }; }) => {
        authority_data.authority_list = res.data.data
      })
    })
    const route = useRoute()   // 当前活跃的路由
    const params: any = route.params
    const authority_data = reactive(
        new AuthorityPage(params.id, params.authority)
    )

    const changeAuthority = () => {
      console.log(authority_data.tree_ref.getCheckedKeys()
      // 对乱序的数组进行排序
          .sort(
              function (a: number, b:number){
                return a - b
              }
          )
      )
      // 传给后台, 后台去进行修改
    }
     const back = () => {
        router.push({
          name: "RoleView",
        })
     }
    return {
      ...toRefs(authority_data),
      changeAuthority,
      back
    }
  }
})
</script>

<style scoped>

</style>