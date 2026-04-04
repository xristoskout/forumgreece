import {defineField, defineType} from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'lang',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          {title: 'English', value: 'en'},
          {title: 'Greek', value: 'el'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'heroBadge',
      title: 'Hero badge',
      type: 'string',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero title',
      type: 'string',
    }),
    defineField({
      name: 'heroText',
      title: 'Hero text',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'heroPrimary',
      title: 'Hero primary button',
      type: 'string',
    }),
    defineField({
      name: 'heroSecondary',
      title: 'Hero secondary button',
      type: 'string',
    }),

    defineField({
      name: 'heroPanelEyebrow',
      title: 'Hero panel eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'heroPanelTitle',
      title: 'Hero panel title',
      type: 'string',
    }),
    defineField({
      name: 'heroPanelText',
      title: 'Hero panel text',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'startPlanningEyebrow',
      title: 'Start planning eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'startPlanningTitle',
      title: 'Start planning title',
      type: 'string',
    }),
    defineField({
      name: 'startPlanningText',
      title: 'Start planning text',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'featuredCollectionsEyebrow',
      title: 'Featured collections eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'featuredCollectionsTitle',
      title: 'Featured collections title',
      type: 'string',
    }),
    defineField({
      name: 'featuredCollectionsText',
      title: 'Featured collections text',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'destinationEyebrow',
      title: 'Destination eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'destinationTitle',
      title: 'Destination title',
      type: 'string',
    }),
    defineField({
      name: 'destinationText',
      title: 'Destination text',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'travelHubEyebrow',
      title: 'Travel hub eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'travelHubTitle',
      title: 'Travel hub title',
      type: 'string',
    }),
    defineField({
      name: 'travelHubText',
      title: 'Travel hub text',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'travelHubCta',
      title: 'Travel hub CTA',
      type: 'string',
    }),

    defineField({
      name: 'hotelsEyebrow',
      title: 'Hotels eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'hotelsTitle',
      title: 'Hotels title',
      type: 'string',
    }),
    defineField({
      name: 'hotelsText',
      title: 'Hotels text',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'hotelsPromoTitle',
      title: 'Hotels promo title',
      type: 'string',
    }),

    defineField({
      name: 'toursEyebrow',
      title: 'Tours eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'toursTitle',
      title: 'Tours title',
      type: 'string',
    }),
    defineField({
      name: 'toursText',
      title: 'Tours text',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'foodEyebrow',
      title: 'Food eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'foodTitle',
      title: 'Food title',
      type: 'string',
    }),
    defineField({
      name: 'foodText',
      title: 'Food text',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'communitiesEyebrow',
      title: 'Communities eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'communitiesTitle',
      title: 'Communities title',
      type: 'string',
    }),
    defineField({
      name: 'communitiesText',
      title: 'Communities text',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'footerText',
      title: 'Footer text',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'ctaAd',
      title: 'Advertise button text',
      type: 'string',
    }),
    defineField({
      name: 'footerAbout',
      title: 'Footer about',
      type: 'string',
    }),
    defineField({
      name: 'footerContact',
      title: 'Footer contact',
      type: 'string',
    }),
    defineField({
      name: 'footerPrivacy',
      title: 'Footer privacy',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      lang: 'lang',
      title: 'heroTitle',
    },
    prepare({lang, title}) {
      return {
        title: `Home Page (${lang ?? 'no-lang'})`,
        subtitle: title,
      }
    },
  },
})