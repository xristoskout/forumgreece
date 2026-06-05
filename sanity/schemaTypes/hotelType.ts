import {defineField, defineType} from 'sanity'

export const hotelType = defineType({
  name: 'hotel',
  title: 'Hotel / Accommodation (Ξενοδοχείο)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Hotel Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'place',
      title: 'Place / Destination',
      type: 'string',
      description: 'e.g. Santorini, Crete',
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
      name: 'featuresEn',
      title: 'Features / Areas (English)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'featuresEl',
      title: 'Features / Areas (Greek)',
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
