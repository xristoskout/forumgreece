import {defineField, defineType} from 'sanity'

export const foodType = defineType({
  name: 'food',
  title: 'Food / Restaurant (Φαγητό)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'place',
      title: 'Place / Destination',
      type: 'string',
    }),
    defineField({
      name: 'infoEn',
      title: 'Short Info (English)',
      type: 'text',
    }),
    defineField({
      name: 'infoEl',
      title: 'Short Info (Greek)',
      type: 'text',
    }),
    defineField({
      name: 'specialtiesEn',
      title: 'Specialties (English)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'specialtiesEl',
      title: 'Specialties (Greek)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})
