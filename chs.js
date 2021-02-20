/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    '& Quantum Reset': '& 量子重置',
    'Option': '选项',
    'Quantity': '数量',
    'Quantum': '量子',
    'Qubit': '量子位',
    'Research': '研究',
    'Restart': '重新开始',
    'name': '名称',
    'New Age': '新世纪',
    'None': '无',
    'Output': '输出',
    'Money': '货币',
    'Achievement': '成就',
    'Challenge': '挑战',
    'Cost': '成本',
    'Export': '导出',
    'Extra Digit': '额外数字',
    'Hard Reset': '硬复位',
    'Hotkeys': '快捷键',
    'hehe': '呵呵',
    'Import': '导入',
    'Incrementer': '增量器',
    'Infinity Boost': '无限提升',
    'Lab Town': '实验室镇',
    'Make': '制作',
    'Module': '模块',
    'More Challenges': '更多挑战',
    'Multi Process': '多进程',
    'My Discord': '我的Discord',
    'Reboot': '重启',
    'Reboot Cool Down': '重新启动冷却',
    'Programs': '程序',
    'load': '加载',
    'Make speed': '制作速度',
    'Larger Memory': '更大的内存',
    'Infinity Research': '无限研究',
    'Lab': '实验室',
    'Durability': '耐用性',
    'Run': '运行',
    'Sacrifice': '牺牲',
    'Save': '保存',
    'Shop': '商店',
    'Singularit': '奇点',
    'Singularity': '奇点',
    'Speed': '速度',
    'Stat': '统计',
    'Ultimate Science': '终极科学',
    'Upgrades': '升级',
    'Upgrade!': '升级!',
    'Base': '基础',
    'Boost!': '提升!',
    'Booster': '加速器',
    'Bugged Reality': '错误的现实',
    'Broken Machine': '破碎机',
    'Bulk QL Challenge': '散装QL挑战',
    'CPU upgrade level +': 'CPU升级等级 +',
    'decrease speed /': '降低速度 /',
    'Digit': '数字',
    'Boost': '提升',
    'Effects': '效果',
    'Exit challenge': '退出挑战',
    'Game speed': '游戏速度',
    'Tech lab?': '技术实验室？',
    'Second Singularity': '第二奇点',
    'Skilled': '熟练',
    'Rich': '富有',
    'Richer': '更富有',
    'Respec': '规格',
    'Base +': '基础 +',
    'Bonus CPU Level': '额外的CPU等级',
    'Multiply mine power by Digits': '数字乘以矿山的力量',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    'Reward of challenges are one of it\'s Machine, a Incrementer, a SP and a Extra Qubit': '挑战的奖励是它的一个机器，一个增量器，一个SP和一个额外的量子位元',
    'Shift + 1 ~ 8: Buy research 1 ~': 'Shift + 1〜8：购买研究1〜',
    'Upgrade durability to use overclock longer': '升级耐用性以延长超频时间',
    'Buy CPU upgrade automatically': '购买CPU自动升级',
    'You\'ve played this game for': '你玩了这个游戏',
    'You need to reach 63,999,999(10) to Reboot': '您需要达到63,999,999（10）才能重启',
    'Increase your base to store more number': '增加你的基础存储更多的数字',
    'Let\'s count to ten': '数到十',
    'Overclocker effect x2, but Durability decrease speed +': '超频效果x2，但耐用性降低速度 +',
    'Multiply mine power by digits': '通过数字乘以矿用电力',
    'A Dollar': '一美元',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "Quantum ": "量子",
    'Number': '数字',
    "Overclock ": "超频",
    'Durability ': '耐用性',
    "Speed Challenge ": "速度挑战",
    "Start durability": "开始耐久性",
    "Challene Fail:": "挑战失败:",
    "Booster Challenge": "助推器挑战",
    "Next Lab:": "下个实验室:",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "\n": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^You have (.+) Research Points$/, '您有 $1 研究点'],
    [/^You have (.+) Singularity Power$/, '您有 $1 奇点功率'],
]);