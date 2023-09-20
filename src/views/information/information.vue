<template>
    <div>
        <el-button>查看信息</el-button>
        <el-descriptions title="基本信息" :column="3" border>
            <el-descriptions-item label="姓名">{{ Name }}</el-descriptions-item>
            <el-descriptions-item label="性别">{{ Gender }}</el-descriptions-item>
            <el-descriptions-item label="民族">{{ Nationality }}</el-descriptions-item>
            <el-descriptions-item label="出生时间">{{ Birthday }}</el-descriptions-item>
            <el-descriptions-item label="政治面貌">{{ Political_Status }}</el-descriptions-item>
            <el-descriptions-item label="籍贯">{{ Native_Plac }}</el-descriptions-item>
            <el-descriptions-item label="学历">{{ Qualification }}</el-descriptions-item>
            <el-descriptions-item label="毕业院校">{{ School }}</el-descriptions-item>
            <el-descriptions-item label="专业">{{ Specialized_Subject }}</el-descriptions-item>
            <el-descriptions-item label="毕业时间">{{ Graduation_Date }}</el-descriptions-item>
            <el-descriptions-item label="身高">{{ Height }}</el-descriptions-item>
            <el-descriptions-item label="体重">{{ Weight }}</el-descriptions-item>
        </el-descriptions>
        <el-button @click="BaseInformation = true">编辑基本信息</el-button>

        <el-descriptions title="求职信息" border>
            <el-descriptions-item label="求职意向">{{ Job_Purpose }}</el-descriptions-item>
        </el-descriptions>
        <el-button>编辑求职信息</el-button>

        <el-descriptions title="学习" border>
            <el-descriptions-item label="学习课程">{{ Learned_Courses }}</el-descriptions-item>
        </el-descriptions>
        <el-button>编辑学习信息</el-button>

        <el-descriptions title="联系方式" :column="1" border>
            <el-descriptions-item label="手机号码">{{ Phone }}</el-descriptions-item>
            <el-descriptions-item label="邮箱">{{ E_mail }}</el-descriptions-item>
            <el-descriptions-item label="居住地址">{{ Address }}</el-descriptions-item>
        </el-descriptions>
        <el-button>编辑联系方式信息</el-button>

        <el-descriptions title="个人能力" :column="1" border>
            <el-descriptions-item label="英语能力">{{ Ability_English }}</el-descriptions-item>
            <el-descriptions-item label="计算机能力">{{ Ability_Computer }}</el-descriptions-item>
            <el-descriptions-item label="办公能力">{{ Ability_Office }}</el-descriptions-item>
            <el-descriptions-item label="软件能力">{{ Ability_Sotfware }}</el-descriptions-item>
        </el-descriptions>
        <el-button>编辑联系方式信息</el-button>

        <el-descriptions title="评价" border>
            <el-descriptions-item label="自我评价">
                <div v-html="Self_Assessment"></div>
            </el-descriptions-item>
        </el-descriptions>
        <el-button>编辑学习信息</el-button>

        <el-descriptions title="其他信息" border>
            <el-descriptions-item label="业余爱好">{{ Hobby }}</el-descriptions-item>
        </el-descriptions>
        <el-button>编辑其他信息</el-button>
    </div>

    <el-dialog v-model="BaseInformation">

    </el-dialog>
</template>

<script>
export default {
    name: "information",

    data() {
        return {
            Name: '万宏宇',
            Gender: '男',
            Nationality: '汉',
            Birthday: '	1999-10-28',
            Political_Status: '	团员',
            Native_Place: '	武进湖塘',
            Qualification: '本科',
            School: '南京工业职业技术大学',
            Specialized_Subject: '软件工程',
            Graduation_Date: '2023-06-30',
            Height: '180',
            Weight: '70KG',

            Job_Purpose: 'JAVA开发工程师，测试工程师',

            Learned_Courses: '面向对象高级程序设计，数据结构与算法，数据库技术与应用，JavaScript程序设计，软件测试与质量保证。',

            Phone: '18961112605',
            E_mail: '1076875959@qq.com',
            Address: '江苏省常州市武进区湖塘镇沙塘岸居委沙塘岸112号',

            Ability_English: '全国大学英语4级',
            Ability_Computer: '全国计算机等级考试2级JAVA',
            Ability_Office: '熟练使用WORD、EXCEL等办公软件',
            Ability_Sotfware: '熟练使用IDEA、VSCODE编程软件',

            Self_Assessment: '吃苦耐劳，有良好的心态。<br>目标明确的时候，有较强的执行力和学习能力。<br>待人友善诚实，能快速融入集体。',

            Hobby: '象棋、围棋、听音乐。',

            BaseInformation: false,
        };
    },

    methods: {

    },

}
</script>