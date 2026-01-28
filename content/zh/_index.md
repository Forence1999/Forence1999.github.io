---
# Leave the homepage title empty to use the site title
title: ''
summary: ''
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: me
      text: ''
      # Show a call-to-action button under your biography? (optional)
      button:
        text: 下载简历
        url: uploads/resume.pdf
      headings:
        about: ''
        education: ''
        interests: ''
    design:
      # Use the new Gradient Mesh which automatically adapts to the selected theme colors
      background:
        gradient_mesh:
          enable: true

      # Name heading sizing to accommodate long or short names
      name:
        size: md # Options: xs, sm, md, lg (default), xl

      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
  - block: markdown
    content:
      title: '📚 我的研究'
      subtitle: ''
      text: |-
        我是香港大学计算机科学博士研究生，师从吴川教授和孔令鹏教授。我的研究专注于使人工智能系统更加强大、对齐和高效。

        我目前的研究兴趣包括：
        - **智能体系统**：构建用于长期任务的鲁棒性和自适应智能体系统
        - **大语言模型超级对齐**：开发使大语言模型与人类价值观和意图对齐的方法
        - **数据合成**：通过树引导子空间分割等创新技术创建高质量合成数据

        我已在NIPS、ICLR、ACL和EMNLP等顶级会议上发表了14+篇论文。欢迎联系我进行合作！
    design:
      columns: '1'
  - block: collection
    id: papers
    content:
      title: 精选论文
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: article-grid
      columns: 2
  - block: collection
    content:
      title: 近期论文
      text: ''
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      view: citation
  - block: collection
    id: talks
    content:
      title: 近期与即将到来的演讲
      filters:
        folders:
          - events
    design:
      view: card
  - block: collection
    id: news
    content:
      title: 最新动态
      subtitle: ''
      text: ''
      # Page type to display. E.g. post, talk, publication...
      page_type: blog
      # Choose how many pages you would like to display (0 = all pages)
      count: 10
      # Filter on criteria
      filters:
        author: ''
        category: ''
        tag: ''
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ''
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: card
      # Reduce spacing
      spacing:
        padding: [0, 0, 0, 0]
  - block: cta-card
    demo: true # Only display this section in the HugoBlox Kit demo site
    content:
      title: 👉 像这样构建你自己的学术网站
      text: |-
        本网站由HugoBlox Kit生成 - 这是一个免费的、基于Hugo的开源网站构建器，受到25万+学者的信赖。

        <a class="github-button" href="https://github.com/HugoBlox/kit" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star HugoBlox/kit on GitHub">Star</a>

        使用区块轻松构建任何内容 - 无需编码！

        从登陆页面、第二大脑和课程到学术简历、会议和技术博客。
      button:
        text: 开始使用
        url: https://hugoblox.com/templates/
    design:
      card:
        # Card background color (CSS class)
        css_class: 'bg-primary-300 dark:bg-primary-700'
        css_style: ''
---
