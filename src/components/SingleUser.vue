<template>
    <div v-if="singleUser !== null">
        <h2>
            Single user {{id}}
        </h2>
        <el-card :body-style="{ padding: '0px' }" class="box-card">
            <div style="padding: 14px;" class="card-container">
                <div class="status">
                    <span class="label">Employee status:</span>  {{ singleUser.isInternal === true ? 'Internal' : 'Outsource' }}
                </div>
                <div> <span class="label">Name:</span> {{ singleUser.name }}</div>
                <div class="descr"> <span class="label">Description:</span> {{ singleUser.description }}</div>
                <div class="priority">
                    <span class="label">Priority:</span>  {{ singleUser.priority }}
                </div>
                <div class="preferences">
                    <div class="label title">
                        Preferences:
                    </div>
                    <el-tag
                        v-for="(preference, index) in singleUser.preferences" 
                        :key="index"
                        effect="dark"
                        :type="computedPreferences(preference.split(' ')[0])"
                        class="tag"
                    >
                        {{ preference.split(' ')[0] }}
                    </el-tag>
                </div>
                <div class="department">
                    <span class="label">Department:</span> {{ singleUser.department }}
                </div>
                <div>
                    <el-button 
                        type="warning" 
                        class="button"
                        @click="$router.push({path: `/user/edit/${singleUser.id}`})"
                    >
                        Edit
                    </el-button>
                    <el-button 
                        type="danger" 
                        class="button"
                        @click="handleDelete()"
                    >
                        Delete
                    </el-button>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'SingleUser',
    props: ['id'],
    methods: {
        computedPreferences(val) {
            switch(val) {
                case 'Create': return 'success';
                case 'Delete': return 'danger';
                case 'Edit': return 'warning';
                case 'Read': return 'primary';
            }
        },
        handleDelete(id) {
            this.$store.dispatch('deleteUser', this.id)
                .then(() => {
                    this.$message('User deleted');
                    this.$router.push({ path: 'list' });
                })
            
        }
    },
    computed: {
        ...mapGetters(['singleUser'])
    },
    created() {
        this.$store.dispatch('getSingleUser', this.id);
    }
}
</script>

<style scoped>
    .box-card{
        display: inline-block;
    }
    .label{
        font-weight: bold;
    }
    .card-container > div{
        margin-bottom: 20px;
    }
    .title{
        margin-bottom: 20px;
    }
    .tag{
        margin-right: 10px;
    }
</style>
