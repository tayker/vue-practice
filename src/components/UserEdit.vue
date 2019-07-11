<template>
    <div v-if="singleUser !== null">
        <h2>
            User edit! {{id}}
        </h2>
        <el-form :model="singleUser" :rules="rules" ref="singleUser" label-width="120px" class="demo-ruleForm">
            <el-form-item label="User name" prop="name">
                <el-input v-model="singleUser.name"></el-input>
            </el-form-item>
            <el-form-item label="User priority" prop="priority">
                <el-select v-model="singleUser.priority" placeholder="Priority">
                    <el-option label="Green" value="green"></el-option>
                    <el-option label="Yellow" value="yellow"></el-option>
                    <el-option label="Red" value="red"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Internal employee" prop="isInternal">
                <el-switch v-model="singleUser.isInternal"></el-switch>
            </el-form-item>
            <el-form-item label="User preferences" prop="preferences">
                <el-checkbox-group v-model="singleUser.preferences">
                    <el-checkbox label="Read Products" name="preferences"></el-checkbox>
                    <el-checkbox label="Create Products" name="preferences"></el-checkbox>
                    <el-checkbox label="Delete Products" name="preferences"></el-checkbox>
                    <el-checkbox label="Edit Products" name="preferences"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Department" prop="department">
                <el-radio-group v-model="singleUser.department">
                    <el-radio label="RSC"></el-radio>
                    <el-radio label="HR"></el-radio>
                    <el-radio label="IT"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="User short description" prop="description" label-width="150px">
                <el-input type="textarea" v-model="singleUser.description"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button 
                    type="primary" 
                    @click="submitForm('singleUser')"
                    :loading="loading"
                >
                    Edit
                </el-button>
                <el-button @click="resetForm('singleUser')">Reset</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'UserEdit',
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$store.dispatch('editUser', this.singleUser)
                        .then(() => {
                            this.$message('User edited');
                        })
                } else {
                    // console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
    props: ['id'],
    computed: {
        ...mapGetters(['singleUser', 'loading']),
        rules() {
                return {
                    name: [
                        { required: true, message: 'Please fill the name', trigger: 'blur' },
                        { min: 6, message: 'Length should be more than 6', trigger: 'blur' }
                    ],
                    priority: [
                        { required: true, message: 'Please choose the priority', trigger: 'change' }
                    ],
                    department: [
                        { required: true, message: 'Please choose the department', trigger: 'change' }
                    ],
                    description: [
                        { required: true, message: 'Please fill the description', trigger: 'blur' },
                        { min: 10, message: 'Length should be more than 10', trigger: 'blur' }
                    ]
                }
                
            }
    },
    created() {
        this.$store.dispatch('getSingleUser', this.id);
    }
}
</script>

<style>

</style>
