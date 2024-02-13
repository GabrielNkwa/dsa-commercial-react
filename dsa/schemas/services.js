import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'services',
  title: 'services',
  type: 'document',
  fields: [
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title',
      title: 'Service',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
  ],
})
