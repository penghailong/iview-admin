const Mock = require('mockjs')
module.exports = {
	getComment : Mock.mock({
		"error":0,
		"message":"success",
		"result|1":[{
			"author":"@name",
			"comment":"@cparagraph",
			"date":"@datetime"
		}]
	}),
	addComment : Mock.mock({
		"error":0,
		"message":"success",
		"result":[]
	}),
	delComment : Mock.mock({
		"error":0,
		"message":"success",
		"age|1-20":20
	}),
	getDeptNode : Mock.mock({
		"obj": {
	    "allMeta": true,
	    "code": "10",
	    "id": 1,
	    "left": 1,
	    "name": "招商银行",
	    "pid": 0,
	    "right": 96
	    },
	    "leaf": false,
	    "children": [
	        {
	            "obj": {
	                "allMeta": true,
	                "code": "20",
	                "id": 2,
	                "left": 2,
	                "name": "总行",
	                "pid": 1,
	                "right": 9
	            },
	            "leaf": false,
	            "children": [
	                {
	                    "obj": {
	                        "allMeta": true,
	                        "code": "30",
	                        "id": 3,
	                        "left": 3,
	                        "name": "朝阳支行",
	                        "pid": 2,
	                        "right": 4
	                    },
	                    "leaf": true
	                },{
	                    "obj": {
	                        "allMeta": true,
	                        "code": "40",
	                        "id": 4,
	                        "left": 5,
	                        "name": "海淀支行",
	                        "pid": 2,
	                        "right": 6
	                    },
	                    "leaf": true
	                },
	                {
	                    "obj": {
	                        "allMeta": true,
	                        "code": "50",
	                        "id": 5,
	                        "left": 7,
	                        "name": "通州支行",
	                        "pid": 2,
	                        "right": 8
	                    },
	                    "leaf": true
	                }
	            ]
	        },
	        {
	            "obj": {
	                "allMeta": true,
	                "code": "60",
	                "id": 8,
	                "left": 10,
	                "name": "北京分行",
	                "pid": 1,
	                "right": 11
	            },
	            "leaf": true
	        },
	        {
	            "obj": {
	                "allMeta": true,
	                "code": "70",
	                "id": 9,
	                "left": 12,
	                "name": "广州分行",
	                "pid": 1,
	                "right": 13
	            },
	            "leaf": true
	        },
	        {
	            "obj": {
	                "allMeta": true,
	                "code": "80",
	                "id": 10,
	                "left": 14,
	                "name": "上海分行",
	                "pid": 1,
	                "right": 15
	            },
	            "leaf": true
	        }
        ]
	}),
	getDeptNode1 : Mock.mock({
		"name": "招商银行",
		"leaf": false,
		"children": [
			{
				"name": "总行",
				"leaf": false,
				"children": [
					{
						"name": "朝阳支行",
						"leaf": true
					},
					{
						"name": "海淀支行",
						"leaf": true
					},
					{
						"name": "通州支行",
						"leaf": true
					}
				]
			},
			{
				"name": "北京分行",
				"leaf": true
			},
			{
				"name": "广州分行",
				"leaf": true
			},
			{
				"name": "上海分行",
				"leaf": true
			}
		]
	}),
	getDeptNode2: Mock.mock([
			    {
			        "name": "朝阳支行",
			        "leaf": true
			    },
			    {
			        "name": "海淀支行",
			        "leaf": true
			    },
			    {
			        "name": "通州支行",
			        "leaf": true
			    } 
		
	])
};