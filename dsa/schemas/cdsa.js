import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cdsa',
  title: 'CDSA',
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
      title: 'Description',
      type: 'blockContent',
    }),
   
  ],
})
