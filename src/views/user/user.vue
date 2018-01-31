<style lang="less">
    @import '../../styles/common.less';
    @import '../tables/components/table.less';
    @import './user.less';
</style>
<template>
    <div class="user-grid">
        <Row>
           <Col span="24">
            <Card style="height:50px">
            <p slot="title"> <Icon type="android-contact"></Icon> 用户管理</p>
           </Card>
          </Col>
        </Row>
        <Row class="padding-top-10">
            <Col span="24">
                <Col span="6">
                    <Card style="height:750px">
                        <div class="access-user-con access-current-user-con">
                            <el-tree :props="props1" :load="loadNode" lazy show-checkbox> </el-tree>
                        </div>
                    </Card>
                </Col>
                <Col span="18" class="padding-left-10">
                    <Card style="height:750px">
                        <p slot="title">
                            <Icon type="android-remove"></Icon>
                            用户列表
                        </p>
                        <div class="user-grid-body">
                            <Table border :content="self"  :columns="columns10" :data="data9"></Table>

                        </div>
                        <div class="user-grid-new">
                            <Button   @click="editNewUser" style="width:90px;" type="ghost"><Icon type="plus"></Icon>&nbsp;&nbsp;新增用户</Button>
                        </div>
                        <div class="user-grid-page">
                            <Page :total="100" show-total></Page>
                        </div>
                    </Card>
              </Col>
            </Col>
        </Row>
    </div>
</template>

<script>
const axios = require('axios');
import tableData from '../tables/components/table_data.js';
import expandRow from './expandRow.vue';
var baseUrl = "/api/getNode";
  export default {
      name: 'user',
      components: {
        expandRow
      },
      data() {
          const deleteUserGrid =  (h, params) => {
              return h('a',{
                on:{
                    click : ()=>{
                        this.data9.shift(params);
                    }
                }
              },[
                h('Icon',{
                    props:{
                        type:'minus-circled'
                    }
                }),
                h('strong','  删除')
              ]);
          };
          return {
              props1: {
                  label: 'name',
                  children: 'children',
                  isLeaf: 'leaf',
              },
              self : this,
                  columns10: [
                      {
                          type: 'expand',
                          width: 40,
                          render: (h, params) => {
                              return h(expandRow, {
                                  props: {
                                    row: params.row
                                  }
                              });
                          }
                      },

            {
                title: '姓名',
                key: 'name',
                width:'100',
                align:'center',
                render: (h, params) => {
                    const row = params.row;
                    const text = row.name;
                    return h('div',[
                        h('Icon',{
                            props:{
                                type:'person'
                            }
                        }),
                        h('strong',text)
                    ]);
                }
            },
            {
                title: '用户名',
                key: 'code',
                width:'100',
                align:'center'
            },
            {
                title: '角色',
                key: 'role',
                width:'150',
                align:'center'
            },
            {
                title: '邮箱',
                key: 'email',
                width:'200',
                align:'center'
            },
            {
                title: '电话',
                key: 'tel',
                width:'120',
                align:'center'
            },
            {
                title: '状态',
                key: 'status',
                width:'80',
                align:'center'
            },
            {
                title: '部门',
                key: 'dept',
                align:'center',
                width:'100'
            },
            {
                title :'操作',
                align:'center',
                render: (h, params) => {
                    const row = params.row;
                    return h('div',[
                        deleteUserGrid(h,row)
                    ]);
                }
            }
        ],
        data9: [
            {
                code: 'penghl',
                name: '彭海龙',
                role: ['启动用户'],
                email: '349724343@qq.com',
                tel: '1234567890',
                status: '启用',
                dept: '部门'
            },{
                code: 'penghl1',
                name: '彭海龙1',
                role: ['启动用户1'],
                email: '3497243431@qq.com',
                tel: '12345678901',
                status: '启用',
                dept: '部门1'
            }
        ]
      };
    },
    methods: {
      getData(){

      },
      loadNode(node, resolve) {
        var _self = this;
        axios.get(baseUrl, {

        })
        .then(function (response) {
             var data = response.data;
             if (node.level === 0) {
                  return resolve([{ name: data.name }]);
             }
             if (node.level > 1) {
                baseUrl = '/api/getNode1';
                axios.get(baseUrl, {
                })
                .then(function (res) {
                    var resd = res.data;
                     setTimeout(() => {
                        resolve(resd);
                     }, 500);
                })
             }
             setTimeout(() => {
                resolve(data.children);
            }, 500);
        })
        .catch(function (error) {
            console.log(error)
        })
      },
      editNewUser(){
        let newData =
        {
            code: '',
            name: '',
            role: [],
            email: '',
            tel: '',
            status: '',
            dept: ''
        }
        this.data9.push(newData);
      }
    },
    created () {
        this.getData();
    }
  };
</script>
