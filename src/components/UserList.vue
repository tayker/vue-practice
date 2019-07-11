<template>
    <div>
        <el-table
            v-loading="loading"
            :data="usersList"
            style="width: 100%"
            :row-class-name="tableRowClassName"
        >
            <el-table-column
                label="Employee category"
                width="146"
            >
                <template slot-scope="scope">
                    <i class="el-icon-s-custom"></i>
                    <span style="margin-left: 10px">{{ scope.row.isInternal === true ? 'Internal' : 'Outsource' }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="Name"
                width="180"
            >
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                    <p>Desc: {{ scope.row.description }}</p>
                    <div 
                        slot="reference" 
                        class="name-wrapper"
                        @click="$router.push({path: `/user/${scope.row.id}`})"
                        style="cursor: pointer"
                    >
                        {{ scope.row.name }}
                    </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column
                prop="preferences"
                label="Preferences"
                width="200"
                :filters="[
                    { text: 'Create', value: 'Create' }, 
                    { text: 'Edit', value: 'Edit' },
                    { text: 'Delete', value: 'Delete' },
                    { text: 'Read', value: 'Read' }
                ]"
                :filter-method="filterTag"
                filter-placement="bottom-end"
            >
                <template slot-scope="scope">
                    <el-tag
                        v-for="(action, index) in scope.row.preferences"
                        :key="index"
                        :type="computedAction(action.split(' ')[0])"
                        disable-transitions
                        effect="dark"
                        class="action-tag"
                    >
                        {{action.split(' ')[0]}}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column
                label="Department"
                width="110"
            >
                <template slot-scope="scope">
                    <i :class="computedDepartment(scope.row.department)"></i>
                    <span style="margin-left: 10px">{{ scope.row.department }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="Operations"
            >
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="$router.push({path: `/user/edit/${scope.row.id}`})"
                    >
                        Edit
                    </el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.row.id)"
                    >
                        Delete
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <users-chart 
            :chartData="chartData" 
            :options="chartOptions"
        >
        </users-chart>
        
    </div>
    
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import UsersChart from './UsersChart';

export default {
    name: 'UserList',
    data() {
        return {
            chartOptions: {
                responsive: true
            }
        }
    },
    methods: {
        ...mapActions(['fetchUsers']),
        handleDelete(id) {
            this.$store.dispatch('deleteUser', id)
                .then(() => {
                    this.$message('User deleted');
                })
        },
        filterTag(value, row) {
            return row.preferences.includes(`${value} Products`);
        },
        computedAction(val) {
            switch(val) {
                case 'Create': return 'success';
                case 'Delete': return 'danger';
                case 'Edit': return 'warning';
                case 'Read': return 'primary';
            }
        },
        computedDepartment(val) {
            switch(val) {
                case 'HR': return 'el-icon-s-custom';
                case 'IT': return 'el-icon-s-platform';
                case 'RSC': return 'el-icon-s-order';
            }
        },
        tableRowClassName({row}){
            return row.priority;
        }
    },
    computed: {
        ...mapGetters(['usersList', 'loading']),
        chartData() {
            if(this.usersList !== null) {
                let newChartData = {
                    labels: this.usersList.map((el) => {
                        return el.name;
                    }),
                    datasets: [
                        {
                            label: 'My Chart',
                            backgroundColor: this.usersList.map((el) => {
                                return el.priority;
                            }),
                            data: this.usersList.map((el) => {
                                return el.id;
                            })
                        }
                    ]
                }
                console.log(newChartData)
                return newChartData;
            }
        }
    },
    components: {
        UsersChart
    },
    created() {
        this.fetchUsers();
    }
}
</script>

<style lang="scss">
    .name-wrapper{
        font-weight: bold;
    }
    .action-tag{
        margin: 5px;
    }
    .el-table__row{
        &.green{
            background: rgba(lightgreen, 0.5);
        }
        &.yellow{
            background: rgba(yellow, 0.4);
        }
        &.red{
            background: rgba(lightcoral, 0.5);
        }
    }
</style>
