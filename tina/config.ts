schema: {
  collections: [
    {
      name: 'post',
      label: 'Posts',
      path: 'content/posts',
      format: 'md',
      fields: [
        {
          type: 'string',
          name: 'title',
          label: 'Title',
          isTitle: true,
          required: true,
        },
        {
          type: 'rich-text',
          name: 'body',
          label: 'Body',
          isBody: true,
        },
      ],
    },
    {
      name: 'portfolio',
      label: 'Portfolio Projects',
      path: 'content/portfolio',
      format: 'md',
      fields: [
        {
          type: 'string',
          name: 'title',
          label: 'Project Title',
          isTitle: true,
          required: true,
        },
        {
          type: 'string',
          name: 'categories',
          label: 'Categories',
          description: 'Example: Web Apps, Time Series',
        },
        {
          type: 'datetime',
          name: 'date',
          label: 'Project Date',
        },
        {
          type: 'string',
          name: 'shortDescription',
          label: 'Short Description',
          ui: { component: 'textarea' },
        },
        {
          type: 'string',
          name: 'challenge',
          label: 'Challenge',
          ui: { component: 'textarea' },
        },
        {
          type: 'string',
          name: 'solution',
          label: 'Solution',
          ui: { component: 'textarea' },
        },
        {
          type: 'string',
          name: 'project',
          label: 'Project Link',
          description: 'Use Markdown: [View Website](https://example.com)',
        },
        {
          type: 'string',
          name: 'thumbnail',
          label: 'Thumbnail Path',
          description: 'Example: images/portfolio/my-project.jpg',
        },
        {
          type: 'rich-text',
          name: 'body',
          label: 'Project Details',
          isBody: true,
        },
      ],
    },
  ],
},