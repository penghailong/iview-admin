export const table1Columns = [
    {
        title: '序号',
        type: 'index',
        width: 30,
        align: 'center'
    },
    {
        title: '用户名',
        align: 'center',
        key: 'code',
        editable: true
    },
    {
        title: '姓名',
        align: 'center',
        key: 'username'
    },
    {
        title: '角色',
        align: 'center',
        key: 'role',
        editable: true
    },
    {
        title: '邮箱',
        align: 'center',
        key: 'email',
        editable: true
    },
     {
        title: '电话',
        align: 'center',
        key: 'tel',
        editable: true
    },
     {
        title: '状态',
        align: 'center',
        key: 'status',
        editable: true
    },
    {
        title: '操作',
        align: 'center',
        width: 120,
        key: 'handle',
         handle: ['edit', 'delete']
    }
];

export const table1Data = [
    {
        code:'penghl',
        username:'彭海龙',
        role:'技术经理',
        name: 'penghl',
        email: 'wwww.asp.citic',
        work: '前端开发',
        tel:'13883166161',
        status:'1'
    }
];

export const editInlineColumns = [
    {
        title: '序号',
        type: 'index',
        width : 80,
        align: 'center'
    },
    {
        title: '用户名',
        align: 'center',
        key: 'code',
        editable: true
    },
    {
        title: '姓名',
        align: 'center',
        key: 'username'
    },
    {
        title: '角色',
        align: 'center',
        key: 'role',
        editable: true
    },
    {
        title: '邮箱',
        align: 'center',
        key: 'email',
        editable: true
    },
     {
        title: '电话',
        align: 'center',
        key: 'tel',
        editable: true
    },
    {
        title: '部门',
        align: 'center',
        width: 180,
        key: 'dept',
        editable: false
    }
    ,   
     {
        title: '状态',
        align: 'center',
        key: 'status',
        width : 80,
        editable: true
    }
    
    // {
    //     title: '操作',
    //     align: 'center',
    //     width: 180,
    //     key: 'handle'
    //     handle: ['edit','delete']
    // }
];

export const editInlineData = [
     {
        code:'penghl',
        username:'彭海龙',
        role:'项目经理',
        name: 'penghl',
        email: 'wwww.asp.citic',
        work: '前端开发',
        tel:'13883166161',
        dept:'风控业务一部',
        status:'启用'
    }
];

export const editIncellColumns = [
    {
        title: '序号',
        type: 'index',
        width: 80,
        align: 'center'
    },
    {
        title: '姓名',
        align: 'center',
        key: 'name',
        width: 120,
        editable: true
    },
    {
        title: '性别',
        align: 'center',
        key: 'sex'
    },
    {
        title: '岗位',
        align: 'center',
        width: 160,
        key: 'work',
        editable: true
    },
    {
        title: '操作',
        align: 'center',
        width: 120,
        key: 'handle',
        handle: ['delete']
    }
];

export const editIncellData = [
    {
        name: 'Aresn',
        sex: '男',
        work: '前端开发'
    },
    {
        name: 'Lison',
        sex: '男',
        work: '前端开发'
    },
    {
        name: 'lisa',
        sex: '女',
        work: '程序员鼓励师'
    }
];

export const editInlineAndCellColumn = [
    {
        title: '序号',
        type: 'index',
        width: 80,
        align: 'center'
    },
    {
        title: '姓名',
        align: 'center',
        key: 'name',
        width: 300,
        editable: true
    },
    {
        title: '性别',
        align: 'center',
        key: 'sex'
    },
    {
        title: '岗位',
        align: 'center',
        width: 300,
        key: 'work',
        editable: true
    },
    {
        title: '操作',
        align: 'center',
        width: 200,
        key: 'handle'
        // handle: ['edit', 'delete']
    }
];

export const editInlineAndCellData = [
    {
        name: 'Aresn',
        sex: '男',
        work: '前端开发'
    },
    {
        name: 'Lison',
        sex: '男',
        work: '前端开发'
    },
    {
        name: 'lisa',
        sex: '女',
        work: '程序员鼓励师'
    }
];

export const showCurrentColumns = [
    {
        title: '序号',
        type: 'index',
        width: 80,
        align: 'center'
    },
    {
        title: '姓名',
        align: 'center',
        key: 'name',
        width: 300,
        editable: true
    },
    {
        title: '性别',
        align: 'center',
        key: 'sex'
    },
    {
        title: '岗位',
        align: 'center',
        width: 300,
        key: 'work',
        editable: true
    }
];

const tableData = {
    table1Columns: table1Columns,
    table1Data: table1Data,
    editInlineColumns: editInlineColumns,
    editInlineData: editInlineData,
    editIncellColumns: editIncellColumns,
    editIncellData: editIncellData,
    editInlineAndCellColumn: editInlineAndCellColumn,
    editInlineAndCellData: editInlineAndCellData,
    showCurrentColumns: showCurrentColumns
};

export default tableData;
