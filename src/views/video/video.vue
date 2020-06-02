<template>
  <SubNavigationFrame :breadcrumb="breadcrumbs">
    <div slot="navigation">
      <Button>返回</Button>
    </div>
    <div class="video" slot="content">
      <Button type="primary" @click="addVideoDia = true">新增视频</Button>
      <Table class="table" :columns="columns" :data="data">
        <template slot-scope="{ row, index }" slot="operate">
            <Button size="small" type="success">设置</Button>
            <Button size="small" type="error">删除</Button>
        </template>
      </Table>
      <Page class-name="page" :total="100" />
      <Modal
        v-model="addVideoDia"
        title="上传视频"
        @on-ok="uploadSuccess"
      >
        视频名称：
        <Input v-model="value" placeholder="请输入视频名称..." class="video-name-input" />
        视频文件：
        <Upload class="upload">
          <Button icon="ios-cloud-upload-outline">上传视频封面图</Button>
        </Upload>
      </Modal>
    </div>
  </SubNavigationFrame>
</template>

<script>
import SubNavigationFrame from "../../components/SubNavigationFrame/SubNavigationFrame";
export default {
  data() {
    return {
      addVideoDia: false,
      breadcrumbs: [
        {
          title: '视频管理'
        }
      ],
      columns: [
        {
          type: 'index',
          title: '#',
          width: 50,
          align: 'center'
        },
        {
          title: "视频名称",
          key: "videoName",
          align: 'center',
          tooltip: true
        },
        {
          title: "创建时间",
          key: "createTime",
          width: 120,
          align: 'center'
        },
        {
          title: "创建人",
          key: "createUser",
          width: 150,
          align: 'center',
          ellipsis: true
        },
        {
          title: "收藏数",
          key: "fav",
          width: 90,
          align: 'center'
        },
        {
          title: "浏览数",
          key: "watch",
          width: 90,
          align: 'center'
        },{
          title: "点赞数",
          key: "good",
          width: 90,
          align: 'center'
        },
        {
          title: "审核状态",
          key: "state",
          width: 100,
          align: 'center'
        },
        {
          title: "操作",
          slot: 'operate',
          key: "operate",
          align: 'center'
        }
      ],
      data: [
        {
          videoName: '功夫少林少林足球足球小子.mp4',
          createTime: '2020-02-05',
          createUser: '卢本伟没有开挂',
          fav: 1672,
          watch: 5236,
          good: 7000,
          state: '已审核',
        },
        {
          videoName: '功夫少林.mp4',
          createTime: '2020-02-05',
          createUser: '卢本伟没有开挂',
          fav: 1672,
          watch: 5236,
          good: 7000,
          state: '已审核',
        },
        {
          videoName: '功夫少林.mp4',
          createTime: '2020-02-05',
          createUser: '卢本伟没有开挂',
          fav: 1672,
          watch: 5236,
          good: 7000,
          state: '已审核',
        },
        {
          videoName: '功夫少林.mp4',
          createTime: '2020-02-05',
          createUser: '卢本伟没有开挂',
          fav: 1672,
          watch: 5236,
          good: 7000,
          state: '已审核',
        },
        {
          videoName: '功夫少林.mp4',
          createTime: '2020-02-05',
          createUser: '卢本伟没有开挂',
          fav: 1672,
          watch: 5236,
          good: 7000,
          state: '已审核',
        }
      ],
    };
  },
  components: {
    SubNavigationFrame
  },
  methods: {
    // 上传视频
    uploadSuccess() {
      this.addVideoDia = false
      alert('上传成功')
    }
  }
};
</script>

<style scoped lang='scss'>
@import "./sass/video";
</style>
