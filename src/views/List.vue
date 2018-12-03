<template>
    <div>
        <ul>
            <li>
                <span>作品名称：</span><span>{{searchResult.title}}</span>
            </li>
            <li>
                <span>作品编号：</span><span>{{searchResult.signature}}</span>
            </li>
             <li>
                <span>hash：</span><span>{{searchResult.hash}}</span>
            </li>
            <li>
                <span>作者名称：</span><span>{{searchResult.author}}</span>
            </li>
            <li>
                <span>头像：</span><img :src="avatar" alt="" width="50" height="50">
            </li>
            <li>
                <span>作品：</span><img :src="thumbnail" alt="" width="50" height="50">
            </li>
             <li>
                <span>邮箱：</span><span>{{searchResult.email}}</span>
            </li>
            <li>
                <span>创作时间：</span><span>{{searchResult.createTime}}</span>
            </li>
             <li>
                <span>发布时间：</span><span>{{searchResult.publishedTime}}</span>
            </li>
            <li>
                <span>size：</span><span>{{searchResult.size}}</span>
            </li>
            <li>
                <span>作品简介：</span><span>{{searchResult.description}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchResult:{}
            }
        },
        computed: {
            avatar: function() {
                return this.searchResult.baseUrl + this.searchResult.avatar
            },
            thumbnail: function() {
                return this.searchResult.baseUrl + this.searchResult.thumbnail
            }
        },
        created() {
            this.searchResult = this.$route.params.result 
            console.log(this.searchResult); 
        }
    }
</script>

<style scoped>

</style>