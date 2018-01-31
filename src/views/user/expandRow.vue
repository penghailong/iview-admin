<style lang="less">
    @import './user-edit-detail.less';
</style>
<template>
    <div class="user-edit-form">
        <div class="role-list-con" v-if="showRoleList">
            <transition name="back-message-list">
                <div v-if="showRoleList" class="message-view-content-con">
                    <div class="message-content-top-bar">
                        <span class="mes-back-btn-con"><Button type="text" @click="backUserEditForm"><Icon type="chevron-left"></Icon>&nbsp;&nbsp;返回</Button></span>
                        <h3 class="mes-title">编辑用户【{{ row.name }}】的角色</h3>
                    </div>
                    <p class="mes-time-con"><Icon type="android-time"></Icon>&nbsp;&nbsp;2017-01-01 22:22:00</p>
                    <div class="message-content-body">
                        <p class="message-content">12121</p>
                    </div>
                </div>
            </transition>
        </div>
            <Row>
                <Button v-show="editSubmit" size="small" @click="editUserForm" type="ghost">修改</Button>
                <Form ref="step" :model="row"  :label-width="100">
                    <FormItem label="账号">
                        <Input :disabled="edit" v-model="row.code" :autosize="{minRows: 2,maxRows: 5}"/>
                    </FormItem>
                    <FormItem label="姓名">
                        <Input :disabled="edit" v-model="row.name" :autosize="{minRows: 2,maxRows: 5}"/>
                    </FormItem>
                    <FormItem label="邮箱">
                        <Input :disabled="edit" v-model="row.email"  :autosize="{minRows: 2,maxRows: 5}"/>
                    </FormItem>
                     <FormItem label="状态">
                        <RadioGroup  @on-change="changeUserStatus" :disabled="edit" v-model="row.status">
                            <Radio label="0" :disabled="edit">
                                <span>启用</span>
                            </Radio>
                            <Radio label="1" :disabled="edit">
                                <span>禁用</span>
                            </Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="部门">
                        <Input :disabled="edit" v-model="row.dept" :autosize="{minRows: 2,maxRows: 5}"/>
                    </FormItem>
                    <FormItem label="角色" >
                        <a v-model="row.role" :disabled="edit" @click="editUserRole">{{ row.role }}</a>
                    </FormItem>
                    <FormItem label="">
                        <Button v-show="!editSubmit"  @click="editUserSubmit" style="width:80px;" type="ghost">提交</Button>
                        <Button v-show="!editSubmit"  @click="cancelEdit" style="width:80px;" type="ghost">
                        取消</Button>
                    </FormItem>
                </Form>
            </Row>
        </div>
</template>
<script>
    export default {
        props: {
            row: Object
        },
        data(){
            return {
                edit:true,
                editSubmit:true,
                userStatus:'启用',
                roleModel:[],
                roleList :[
                    {
                        value: '0',
                        label: '系统初始化角色'
                    },
                    {
                        value: '1',
                        label: '部门经理'
                    }
                ],
                showRoleList :false
            };
        },
        methods:{
            editUserForm(){
                this.edit = !this.edit;
                this.editSubmit = !this.editSubmit;
            },
            cancelEdit(){
                this.edit = !this.edit;
                this.editSubmit = !this.editSubmit;
            },
            changeUserStatus(){
             
            },
            editUserSubmit(){

            },
            changeRoleSelect(){

            },
            editUserRole(){
               this.showRoleList = !this.showRoleList;
            },
            backUserEditForm(){
                this.showRoleList = !this.showRoleList;
            }
        }
    };
</script>