import {defineQuery} from 'next-sanity'

export const HOME_PAGE_QUERY = defineQuery(`
  *[_type == "homePage" && lang == $lang][0]{
    heroBadge,
    heroTitle,
    heroText,
    heroPrimary,
    heroSecondary,

    heroPanelEyebrow,
    heroPanelTitle,
    heroPanelText,

    startPlanningEyebrow,
    startPlanningTitle,
    startPlanningText,

    featuredCollectionsEyebrow,
    featuredCollectionsTitle,
    featuredCollectionsText,

    destinationEyebrow,
    destinationTitle,
    destinationText,

    travelHubEyebrow,
    travelHubTitle,
    travelHubText,
    travelHubCta,

    hotelsEyebrow,
    hotelsTitle,
    hotelsText,
    hotelsPromoTitle,

    toursEyebrow,
    toursTitle,
    toursText,

    foodEyebrow,
    foodTitle,
    foodText,

    communitiesEyebrow,
    communitiesTitle,
    communitiesText,

    footerText,
    ctaAd,
    footerAbout,
    footerContact,
    footerPrivacy
  }
`)