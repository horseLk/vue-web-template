<template>
  <div>
    <base-test></base-test>
    <h1>{{ $route.meta.title || 'user List' }}</h1>
    <el-button type="primary">test Button</el-button>
    <base-input />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

h1 {
  color: $--color-success;
}
</style>
