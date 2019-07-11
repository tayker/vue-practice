<template>
    <div>
        <h2>
            User add!
        </h2>
        <el-form :model="userForm" :rules="rules" ref="userForm" label-width="120px" class="demo-ruleForm">
            <el-form-item label="User name" prop="name" label-width="104px">
                <el-input v-model="userForm.name"></el-input>
            </el-form-item>
            <el-form-item label="User priority" prop="priority">
                <el-select v-model="userForm.priority" placeholder="Priority">
                    <el-option label="Green" value="green"></el-option>
                    <el-option label="Yellow" value="yellow"></el-option>
                    <el-option label="Red" value="red"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Internal employee" prop="isInternal" label-width="158px">
                <el-switch v-model="userForm.isInternal"></el-switch>
            </el-form-item>
            <el-form-item label="User preferences" prop="preferences" label-width="146px">
                <el-checkbox-group v-model="userForm.preferences">
                    <el-checkbox label="Read Products" name="preferences"></el-checkbox>
                    <el-checkbox label="Create Products" name="preferences"></el-checkbox>
                    <el-checkbox label="Delete Products" name="preferences"></el-checkbox>
                    <el-checkbox label="Edit Products" name="preferences"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Department" prop="department">
                <el-radio-group v-model="userForm.department">
                    <el-radio label="RSC"></el-radio>
                    <el-radio label="HR"></el-radio>
                    <el-radio label="IT"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="User short description" prop="description" label-width="190px">
                <el-input type="textarea" v-model="userForm.description"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button 
                    type="primary" 
                    @click="submitForm('userForm')"
                    :loading="loading"
                >
                    Create
                </el-button>
                <el-button @click="resetForm('userForm')">Reset</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'UserAdd',
    data() {
        return {
            userForm: {
                name: '',
                priority: '',
                isInternal: true,
                preferences: [],
                department: '',
                description: ''
            },
            rules: {
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
    computed: {
        ...mapGetters(['loading'])
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$store.dispatch('createUser', this.userForm)
                        .then(() => {
                            this.$message('User created');
                            this.$refs[formName].resetFields();
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
    }
}
</script>

<style>

</style>
