import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dcdsa',
  title: 'DCDSA',
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
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'About',
      type: 'string',
    }),
  ],
})
