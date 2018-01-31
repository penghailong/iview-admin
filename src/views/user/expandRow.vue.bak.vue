<style lang="less">
    @import './user-edit-detail.less';
</style>
<template>
    <div>
        <Row class="user-edit-detail">
            <Col span="8">
                <span class="expand-key">账号：</span>
                <span class="expand-value">{{ row.code }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">姓名：</span>
                <span class="expand-value">{{ row.name }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">角色：</span>
                <span class="expand-value">{{ row.role }}</span>
            </Col>
        </Row>
        <Row>
            <Col span="8">
                <span class="expand-key">邮箱：</span>
                <span class="expand-value">{{ row.email }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">状态：</span>
                <span class="expand-value">{{ row.status }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">部门1：</span>
                <span class="expand-value">{{ row.dept }}</span>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        props: {
            row: Object
        }
    };
</script>