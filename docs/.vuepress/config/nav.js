// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: 'FreeSwitch',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '安装使用',
        items: [
          { text: 'FS安装使用', link: '/pages/a61298/' },
          // { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
        ],
      },
      {
        text: '呼叫中心',
        items: [
          { text: '项目架构', link: '/pages/c3da99/' },
        ],
      },
    ],
  },
  {
    text: '知识图谱',
    link: '/KnowledgeGraph/',
    items: [
      { text: 'neo4j', link: '/pages/ec61c3/' },
    ],
  },
  {
    text: '项目',
    link: '/project/',
    items: [
      { text: '超级工作流', link: '/pages/3ceacd/' },
      { text: 'kafka2db', link: '/pages/601d2d/' },
    ],
  },
  {
    text: '大数据',
    link: '/pages/2c361a/',
    items: [
      { text: 'hadoop入门', link: '/pages/81241e/' }
    ],
  },
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    // items: [
    //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
    //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
    //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
    // ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
