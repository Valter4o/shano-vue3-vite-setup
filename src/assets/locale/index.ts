export const getLocale = (i18n: any) => ({
  seeMore: `${i18n.t('ui.seeMore')}`.toUpperCase(),
  redSaleBannerText: `${i18n.t('redSaleBanner.label')}`,
  filter: {
    postCode: `STANDORT`.toUpperCase(),
  },
  optionalPackages: {
    optionalAPackagesTile: `${i18n.t('offer.upsellingLabel')}`.toUpperCase(),
    optionalAccessoriesLabel: `${i18n.t(
      'offer.upsellingAccessoiresLabel'
    )}`.toUpperCase(),
    optionalAccessoriesSubLabel: `${i18n.t(
      'offer.upsellingAccessoiresLabelAddition'
    )}`,
    newCarConnectionLabel: `${i18n.t(
      'offer.upsellingCarConnectionLabel'
    )}`.toUpperCase(),
  },
  customerOffer: {
    heading: `${i18n.t('car.overview')}`.toUpperCase(),
    contactDealer: `${i18n.t('offer.contactDealer')}`.toUpperCase(),
    reserveCar: `${i18n.t('offer.reserve')}`.toUpperCase(),
    optionalAccessories: i18n.t('car.optionalAccessoiresLabel').toUpperCase(),
    totalPrice: i18n.t('offer.total').toUpperCase(),
    discountPrice: i18n.t('offer.price.discountLabel'),
    msrpLabel: i18n.t('offer.price.msrpLabel'),
    optionsForFree: i18n.t('offer.optionsForFreeLabel'),
  },
  vehicleDataExtras: {
    extraTitle: i18n.t('car.data.extraTitle'),
    extras: i18n.t('car.extras'),
  },
  contactRequest: {
    askAQuestion: `${i18n.t('offer.contact.question.label')}`.toUpperCase(),
    makeRequest: `${i18n.t('offer.contact.request.label')}`.toUpperCase(),
    ReserveMyCar: `${i18n.t('offer.contact.reserve.label')}`.toUpperCase(),
    question: {
      send: `${i18n.t('offer.contact.send')}`.toUpperCase(),
      info: `${i18n.t('offer.contact.question.info')}`,
      messagesTitle: `${i18n.t('lead.message.label')}`.toUpperCase(),
      personalDetailsTitle: `${i18n.t('lead.details.label')}`.toUpperCase(),
      nameTitle: `${i18n.t('lead.name.label')}`.toUpperCase(),
      surnameTitle: `${i18n.t('lead.surnameLabel')}`.toUpperCase(),
      emailTitle: `${i18n.t('lead.mail.label')}`.toUpperCase(),
      policyInfo: `${i18n.t('offer.contact.policyInfo')}`,
    },

    request: {
      send: `${i18n.t('offer.contact.send')}`.toUpperCase(),
      info: i18n.t('offer.contact.request.info'),
      messagesTitle: `${i18n.t('lead.message.label')}`.toUpperCase(),
      personalDetailsTitle: `${i18n.t('lead.details.label')}`.toUpperCase(),
      frequentRequestAppointment: i18n.t(
        'offer.contact.frequentRequest.appointment'
      ),
      frequentRequestTestDrive: i18n.t(
        'offer.contact.frequentRequest.testDrive'
      ),
      frequentRequestTradeIn: i18n.t('offer.contact.frequentRequest.tradeIn'),
      frequentRequestQuote: i18n.t(
        'offer.contact.frequentRequest.requestQuote'
      ),
      optInLine: i18n.t('offer.contact.optIn.line'),
      optInPhone: i18n.t('offer.contact.optIn.phone'),
      optInMail: i18n.t('offer.contact.optIn.mail'),
      optInProtection: i18n.t('offer.contact.dataProtection'),
      nameTitle: `${i18n.t('lead.name.label')}`.toUpperCase(),
      phoneTitle: `${i18n.t('lead.phone.label')}`.toUpperCase(),
      surnameTitle: `${i18n.t('lead.surnameLabel')}`.toUpperCase(),
      emailTitle: `${i18n.t('lead.mail.label')}`.toUpperCase(),
    },

    reserve: {
      send: `${i18n.t('offer.contact.send')}`.toUpperCase(),
      info: i18n.t('offer.contact.reserve.info'),
      messagesTitle: `${i18n.t('lead.message.label')}`.toUpperCase(),
      personalDetailsTitle: `${i18n.t('lead.details.label')}`.toUpperCase(),
      nameTitle: `${i18n.t('lead.name.label')}`.toUpperCase(),
      surnameTitle: `${i18n.t('lead.surnameLabel')}`.toUpperCase(),
      emailTitle: `${i18n.t('lead.mail.label')}`.toUpperCase(),
      phoneTitle: `${i18n.t('lead.phone.label')}`.toUpperCase(),
      optInLine: i18n.t('offer.contact.optIn.line'),
      optInPhone: i18n.t('offer.contact.optIn.phone'),
      optInMail: i18n.t('offer.contact.optIn.mail'),
      optInProtection: i18n.t('offer.contact.dataProtection'),
      footnoteReservation: i18n.t('footnote.reservation'),
    },
  },
  whereMyCar: `${i18n.t('dealer.locationLabel')}`.toUpperCase(),
  yourDealers: `${i18n.t('dealer.listing.label')}`.toUpperCase(),
  contactDealer: `${i18n.t('offer.contact.dealer')}`.toUpperCase(),
  footerContent: {
    crossSellingLine: `${i18n.t('offer.crosssellingLine')}`.toUpperCase(),
    footNotesDetail: {
      numbered: [
        `2. ${i18n.t('footnote.dealerPrice')}`,
        `3. ${i18n.t('footnote.installmentValue')}`,
        `4. ${i18n.t('footnote.financeClassic')}`,

        // https://demodern.atlassian.net/browse/MAZFMM2-367 - Disabled
        `5. ${i18n.t('footnote.optionsForFree')}`,

        // https://demodern.atlassian.net/browse/MAZFMM2-358 - Enabled
        // `5. ${i18n.t('footnote.redSaleBanner')}`,

        `6. ${i18n.t('footnote.mx30')}`,
      ],
      stared: [`* ${i18n.t('footnote.co2Emissions')}`],
    },
    footNotesOverview: {
      numbered: [
        `2. ${i18n.t('footnote.dealerPrice')}`,
        `3. ${i18n.t('footnote.installmentValue')}`,
        `4. ${i18n.t('footnote.financeClassic')}`,

        // https://demodern.atlassian.net/browse/MAZFMM2-367 - Disabled
        `5. ${i18n.t('footnote.optionsForFree')}`,

        // https://demodern.atlassian.net/browse/MAZFMM2-358 - Enabled
        // `5. ${i18n.t('footnote.redSaleBanner')}`,
      ],
      stared: [`* ${i18n.t('footnote.co2Emissions')}`],
    },
    footNotesHwsDetail: {
      numbered: [
        `II. ${i18n.t('footnote.dealerPrice')}`,
        `III. ${i18n.t('footnote.installmentValue')}`,
        `IV. ${i18n.t('footnote.financeClassic')}`,
        // https://demodern.atlassian.net/browse/MAZFMM2-367 - Disabled
        `V. ${i18n.t('footnote.optionsForFreeHWS')}`,

        // https://demodern.atlassian.net/browse/MAZFMM2-358 - Enabled
        // `V. ${i18n.t('footnote.redSaleBanner')}`,
        `VI. ${i18n.t('footnote.mx30')}`,
      ],
      stared: [`* ${i18n.t('footnote.co2Emissions')}`],
    },
    footNotesHwsOverview: {
      numbered: [
        `II. ${i18n.t('footnote.dealerPrice')}`,
        `III. ${i18n.t('footnote.installmentValue')}`,
        `IV. ${i18n.t('footnote.financeClassic')}`,
        // https://demodern.atlassian.net/browse/MAZFMM2-367 - Disabled
        `V. ${i18n.t('footnote.optionsForFreeHWS')}`,

        // https://demodern.atlassian.net/browse/MAZFMM2-367 - Enabled
        // `V. ${i18n.t('footnote.redSaleBanner')}`,
      ],
      stared: [`* ${i18n.t('footnote.co2Emissions')}`],
    },
  },
})
