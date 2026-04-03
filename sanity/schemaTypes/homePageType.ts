import {defineField, defineType} from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero title',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero subtitle',
      type: 'text',
      rows: 4,
    }),
  ],
})