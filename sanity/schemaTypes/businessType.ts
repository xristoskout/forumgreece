import {defineField, defineType} from 'sanity'

export const businessType = defineType({
  name: 'business',
  title: 'Local Business (Τοπική Επιχείρηση)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Business Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'destination',
      title: 'Destination (Προορισμός)',
      type: 'reference',
      to: [{type: 'destination'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category (Κατηγορία)',
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {name: 'phone', title: 'Phone Number', type: 'string'},
        {name: 'website', title: 'Website URL', type: 'url'},
        {name: 'instagram', title: 'Instagram Profile', type: 'url'},
        {name: 'googleMaps', title: 'Google Maps Link', type: 'url'},
      ],
    }),
  ],
})
