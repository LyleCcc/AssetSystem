<template>
    <div>
        <el-input v-model="searchQuery" placeholder="搜索资产..." @input="searchAssets"></el-input>
        <el-table :data="filteredAssets">
            <el-table-column prop="name" label="资产名称"></el-table-column>
            <el-table-column prop="type" label="资产类型"></el-table-column>
            <el-table-column prop="purchaseDate" label="购买日期"></el-table-column>
            <el-table-column prop="value" label="资产价值"></el-table-column>
            <!-- 更多列 -->
        </el-table>
    </div>
</template>

<script>
export default {
  name: 'AssetList',
  data() {
    return {
      searchQuery: '',
      assets: [] // 假设这是从后端获取的资产列表
    };
  },
  computed: {
    filteredAssets() {
      if (this.searchQuery) {
        return this.assets.filter(asset =>
          Object.values(asset).some(value => value.toString().toLowerCase().includes(this.searchQuery.toLowerCase()))
        );
      }
      return this.assets;
    }
  },
  methods: {
    searchAssets() {
      // 根据 searchQuery 更新 filteredAssets
    }
  }
};
</script>
