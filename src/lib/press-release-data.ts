export type PressReleaseContent = {
  lead: string;
  sections: {
    heading?: string;
    paragraphs: string[];
  }[];
  quote?: {
    text: string;
    author: string;
    title: string;
  };
  highlights?: string[];
};

export type PressRelease = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  isoDate: string;
  location: string;
  author: string;
  category: "Announcement" | "Partnership" | "Event Report";
  summary: string;
  content: PressReleaseContent;
  nepaliContent?: {
    title: string;
    subtitle: string;
    date: string;
    location: string;
    author: string;
    summary: string;
    content: PressReleaseContent;
  };
  mediaContact: {
    name: string;
    organization: string;
    email: string;
    location: string;
  };
};

export const pressReleases: PressRelease[] = [
  {
    id: "pinkwalk-2026-concludes-over-thousand-participants",
    title:
      "PinkWalk 2026 Concludes with Participation of Over a Thousand Participants",
    subtitle:
      "The walkathon from Basantapur to Patan Durbar Square brought together over 1,000 participants, distinguished guests, health experts, and survivors to spread breast cancer awareness and support patients.",
    date: "October 3, 2026",
    isoDate: "2026-10-03",
    location: "Kathmandu & Lalitpur, Nepal",
    author: "Infinite Cares & PinkWalk 2026 Committee",
    category: "Event Report",
    summary:
      "PinkWalk 2026 successfully concluded on October 3, 2026, with over 1,000 participants walking from Kathmandu Durbar Square to Patan Durbar Square. Registration proceeds were handed over to Cancer Care Nepal to support cancer patient treatment.",
    content: {
      lead: "KATHMANDU / LALITPUR — October 3, 2026 — PinkWalk 2026 successfully concluded today with over one thousand participants joining the walkathon from Kathmandu Durbar Square (Basantapur) to Patan Durbar Square (Mangal Bazar, Lalitpur) to promote breast cancer awareness and support patients.",
      sections: [
        {
          heading: "Walkathon Route & Turnout",
          paragraphs: [
            "The walk started as scheduled at 6:00 AM on Saturday, October 3, 2026 (Ashoj 17, 2083) from Kathmandu Durbar Square in Basantapur and concluded at Patan Durbar Square in Mangal Bazar, Lalitpur.",
            "Over one thousand participants came together led by traditional Dhime baja and carrying placards spreading awareness about breast cancer. Healthcare professionals, cancer survivors, affected families, representatives from various organizations, media professionals, and members of the general public participated in the walk.",
          ],
        },
        {
          heading: "Distinguished Guests, Health Sessions & Survivor Insights",
          paragraphs: [
            "Distinguished guests among the participants included Anuradha Koirala, Hon. Dr. Ojashwi Sherchan, Acting Mayor of Kathmandu Metropolitan City Sunita Dangol, former Minister Sumana Shrestha, musical artist Kali Prasad Baskota, President of Health Insurance Board Dr. Subash Pyakurel, Miss Nepal Dipmala Dahal, and Miss Nepal Cosmo Kasish Subba, who delivered welcome speeches.",
            "Meanwhile, Dr. Madan Piya, Dr. Sandhya, and Dr. Rashmi from Cancer Care provided valuable information on how to detect cancer, bodily changes to watch for, and available treatments. The program was hosted by former Miss Nepal Sugarika KC.",
            "At the closing ceremony held at Patan Durbar Square, cancer survivors shared their inspiring personal journeys, delivering a powerful message that although cancer is a serious illness, full recovery and living a normal life are possible with early detection and timely treatment.",
          ],
        },
        {
          heading: "Handover of Proceeds to Cancer Care Nepal",
          paragraphs: [
            "All proceeds collected from participant registrations during PinkWalk 2026 have been officially handed over by the organizers to Cancer Care Nepal to support the treatment and care of cancer patients in need.",
          ],
        },
        {
          heading: "Event Objectives & Collaborative Impact",
          paragraphs: [
            "PinkWalk 2026 aims to promote awareness about early detection, regular health checkups, timely treatment, and the importance of standing in solidarity with people affected by breast cancer and their families.",
            "PinkWalk 2026 was organized by Infinite Cares in collaboration with Cancer Care Nepal, with support from Kathmandu Metropolitan City, Lalitpur Metropolitan City, and the Nepal Cancer Survivors Society.",
            "The campaign brought together partners from various sectors, including National Cancer Hospital, The Max Foundation, Novala Biotech, CAMS (Center for American Medical Specialists), Le Monal, Snow drops H₂O, NETTV, Uno, Happy Minds, WOW (World of Women), Jeevee, Burst Neembu fizz, Himalayan Java, Smritipatra, Jhigu newa bajah khala, Taal nritya bhumi, Pathao, QFX, eSewa, Bajra nasaa khala, ISS, onepasal, Crayons Corp., and The Kathmandu Post.",
            "The organizing committee expressed heartfelt gratitude to all individuals, partner organizations, media, and communities who joined PinkWalk 2026 and contributed to the collective effort to raise awareness and show solidarity with those affected by breast cancer.",
          ],
        },
      ],
      highlights: [
        "Participants: Over 1,000 walkathon participants",
        "Route: Kathmandu Durbar Square (Basantapur) → Patan Durbar Square (Mangal Bazar)",
        "Fund Handover: Registration proceeds transferred to Cancer Care Nepal for patient support",
        "Distinguished Guests: Anuradha Koirala, Hon. Dr. Ojashwi Sherchan, KMC Acting Mayor Sunita Dangol, Sumana Shrestha, Kali Prasad Baskota, Dr. Subash Pyakurel, Miss Nepal Dipmala Dahal, Kasish Subba",
        "Organizers: Infinite Cares in collaboration with Cancer Care Nepal",
      ],
    },
    nepaliContent: {
      title: "पिंकवाक २०२६ एक हजारभन्दा बढीको सहभागितामा भव्य रुपमा सम्पन्न",
      subtitle:
        "बसन्तपुर देखि पाटन दरबार स्क्वायरसम्मको पदयात्रामा विशिष्ट अतिथि, स्वास्थ्यकर्मी तथा क्यान्सर जितेका व्यक्तिहरूको उपस्थितिमा स्तन क्यान्सर सचेतना तथा ऐक्यबद्धता व्यक्त",
      date: "१७ असोज २०८३",
      location: "काठमाडौं र ललितपुर, नेपाल",
      author: "इन्फिनिट केयर्स तथा पिंकवाक २०२६ समिति",
      summary:
        "स्तन क्यान्सरसम्बन्धी जनचेतना अभिवृद्धि गर्ने उद्देश्यले आयोजना गरिएको ‘पिंकवाक २०२६’ १,००० भन्दा बढीको सहभागितामा असोज १७ गते भव्य रुपमा सम्पन्न भएको छ। संकलित रकम क्यान्सर केयर नेपाललाई हस्तान्तरण गरिएको छ।",
      content: {
        lead: "काठमाडौं — १७ असोज २०८३ — स्तन क्यान्सरसम्बन्धी जनचेतना अभिवृद्धि गर्ने उद्देश्यले आयोजना गरिएको ‘पिंकवाक २०२६’ एक हजारभन्दा बढीको सहभागितामा भव्य रुपमा सम्पन्न भएको छ। सहभागीहरूले आज असोज १७ गते शनिबार बिहान ६ बजे काठमाडौंको बसन्तपुरस्थित काठमाडौं दरबार स्क्वायरमा भेला भई ललितपुरको मंगलबजारस्थित पाटन दरबार स्क्वायरसम्म पदयात्रा गर्नुभयो।",
        sections: [
          {
            heading: "पदयात्रा तथा जनसहभागिता",
            paragraphs: [
              "पदयात्रीहरूले क्यान्सरसम्बन्धी सचेतनामूलक प्लेकार्डहरू बोकेर धिमेबाजासहित उत्साहजनक रूपमा पदयात्रा गर्नुभएको थियो। पदयात्रामा स्वास्थ्यकर्मी, क्यान्सरबाट निको भएका व्यक्ति, प्रभावित परिवार, विभिन्न संघसंस्था, सञ्चारकर्मी तथा सर्वसाधारणको उल्लेख्य सहभागिता रहेको थियो।",
            ],
          },
          {
            heading: "विशिष्ट अतिथि, स्वास्थ्य परामर्श तथा प्रेरणादायी सन्देश",
            paragraphs: [
              "सहभागीहरूमा विशिष्ट अतिथिहरू अनुराधा कोइराला, मा. डा. ओजश्वी शेरचन, काठमाडौं महानगर का. वा. प्रमुख सुनिता डंगोल, पूर्वमन्त्री सुमना श्रेष्ठ, संगीतकर्मी काली प्रसाद बास्कोटा, स्वास्थ्य बीमा बोर्डका अध्यक्ष डा सुवास प्याकुरेल तथा मिस नेपाल दिपमाला दाहाल र मिस नेपाल कस्मो कसिस सुब्बाले स्वागत मन्तव्य दिनुभएको थियो।",
              "त्यसका बीच क्यान्सर केयरका डा. मदन पिया, डा. सन्ध्या, डा. रश्मीले क्यान्सरको पहिचान कसरी गर्ने, शरीरमा आउने परिवर्तनहरू र उपचारसम्बन्धी महत्वपूर्ण जानकारी दिनुभएको थियो। कार्यक्रमको सञ्चालन पूर्वमिस नेपाल सुगारिका केसीले गर्नुभएको थियो।",
              "पाटन दरबार क्षेत्रमा भएको समापन समारोहमा क्यान्सर जितेका व्यक्तिहरूले आफ्नो अनुभव सुनाउँदै क्यान्सर जटिल रोग भए पनि समयमै उपचार गरे निको भई सामान्यरुपमा जीवनयापन सम्भव रहेको प्रेरणादायी सन्देश दिनुभयो।",
            ],
          },
          {
            heading: "क्यान्सर पीडितका लागि रकम हस्तान्तरण",
            paragraphs: [
              "यस कार्यक्रममा दर्ता शुल्क तथा सहयोगमार्फत संकलित सम्पूर्ण रकम आयोजकले क्यान्सर केयर नेपाललाई क्यान्सरपीडितहरूको उपचार तथा सहयोगका लागि हस्तान्तरण गरेका छन्।",
            ],
          },
          {
            heading: "आयोजक, संरक्षक तथा साझेदार संस्थाहरू",
            paragraphs: [
              "स्तन क्यान्सरको प्रारम्भिक पहिचान, नियमित स्वास्थ्य परीक्षण, समयमै उपचार तथा क्यान्सर प्रभावित व्यक्ति र परिवारप्रति ऐक्यबद्धताको सन्देश फैलाउने उद्देश्यले आयोजना भएको पिंकवाक २०२६ इन्फिनिट केयर्सले क्यान्सर केयर नेपालसँगको सहकार्यमा आयोजना गरेको हो।",
              "कार्यक्रममा काठमाडौं महानगरपालिका, ललितपुर महानगरपालिका तथा नेपाल क्यान्सर सर्भाइभर्स सोसाइटीलगायत संस्थाको सहयोग रहेको छ।",
              "कार्यक्रमलाई नेशनल क्यान्सर अस्पताल, म्याक्स फाउन्डेसन, नोभाला बायोटेक, क्याम्स (Center for American Medical Specialists), ले मोनाल (Le Monal), स्‍नो ड्रप्स (Snow drops H₂O), नेट टिभी, उनो (Uno), ह्याप्पी माइन्डस्, वाउ (WOW – World of Women), जीभी (Jeevee), बर्स्ट निम्बू फिज्ज, हिमालयन जाभा, स्मृतिपत्र, झिगु नेवाः बाजं खलः, पठाओ, क्यू एफ एक्स (QFX), इसेवा, बज्र नासः खलः, ताल नृत्य भूमि, आइ एस एस (ISS), वानपसल (onepasal), क्रेयन्स् कोर्प (Crayons Corp.) तथा काठमाडौँ पोस्ट लगायत विभिन्न संस्था तथा व्यवसायले साझेदारी गरेका छन्।",
              "स्तन क्यान्सरविरुद्धको सचेतना अभियानमा सामूहिक सहभागिता र ऐक्यबद्धता जनाउने सबैलाई पिंकवाक २०२६ आयोजक समितिले हार्दिक धन्यवाद व्यक्त गरेको छ।",
            ],
          },
        ],
        highlights: [
          "सहभागिता: १,००० भन्दा बढी पदयात्रीहरूको सहभागिता",
          "पदयात्रा मार्ग: बसन्तपुर (काठमाडौं दरबार स्क्वायर) → मंगलबजार (पाटन दरबार स्क्वायर)",
          "सहयोग हस्तान्तरण: संकलित रकम क्यान्सर केयर नेपाललाई हस्तान्तरण",
          "विशिष्ट अतिथिहरू: अनुराधा कोइराला, सुनिता डंगोल, सुमना श्रेष्ठ, काली प्रसाद बास्कोटा, डा सुवास प्याकुरेल, दिपमाला दाहाल, कसिस सुब्बा",
          "आयोजक: इन्फिनिट केयर्स (क्यान्सर केयर नेपालसँगको सहकार्यमा)",
        ],
      },
    },
    mediaContact: {
      name: "Organizing Committee",
      organization: "PinkWalk Media Desk",
      email: "pinkwalknepal@gmail.com",
      location: "Kathmandu, Nepal",
    },
  },
  {
    id: "pinkwalk-2026-registration-open",
    title: "Registration Opens for PinkWalk 2026",
    subtitle:
      "Participants can now register online via eSewa or by visiting the official registration portal for the upcoming breast cancer awareness walkathon on October 3, 2026.",
    date: "September 30, 2026",
    isoDate: "2026-09-30",
    location: "Kathmandu, Nepal",
    author: "Infinite Cares & PinkWalk 2026 Committee",
    category: "Announcement",
    summary:
      "Registration has officially opened for PinkWalk 2026. Participants can register via eSewa app or through the online registration portal for the walkathon from Basantapur to Patan Durbar Square on October 3, 2026.",
    content: {
      lead: "KATHMANDU — September 30, 2026 — Registration has officially opened for PinkWalk 2026, a public awareness initiative aimed at raising awareness about breast cancer and highlighting the importance of early detection.",
      sections: [
        {
          heading: "Event Details and Route",
          paragraphs: [
            "The walk is scheduled for Saturday, October 3, 2026 (Ashoj 17), starting at 6:00 AM from Kathmandu Durbar Square in Basantapur and concluding at Patan Durbar Square in Mangal Bazar, Lalitpur.",
            "Individuals, community members, organizations, and institutions interested in participating can register online through eSewa, according to the organizers.",
          ],
        },
        {
          heading: "How to Register",
          paragraphs: [
            "Participants can visit https://pinkwalk.github.io/register and scan the QR code displayed on the registration page to complete the registration process.",
            "Alternatively, participants can register directly through the eSewa App by opening eSewa, navigating to 'Voting & Events', and selecting 'Pink Walk'.",
          ],
        },
        {
          heading: "Objective and Expected Participation",
          paragraphs: [
            "PinkWalk 2026 aims to promote awareness about early detection, regular health checkups, timely treatment, and the importance of standing in solidarity with people affected by breast cancer and their families.",
            "Healthcare professionals, cancer survivors, affected families, representatives from various organizations, media professionals, and members of the general public are expected to participate in the walk.",
          ],
        },
        {
          heading: "Organizers and Supporting Partners",
          paragraphs: [
            "PinkWalk 2026 is being organized by Infinite Cares in collaboration with Cancer Care Nepal. The event is supported by Kathmandu Metropolitan City, Lalitpur Metropolitan City, and the Nepal Cancer Survivors Society, among others.",
            "The campaign has also brought together partners from various sectors, including National Cancer Hospital, The Max Foundation, Novala Biotech, CAMS (Center for American Medical Specialists), Le Monal, Snow drops H₂O, NETTV, Uno, Happy Minds, WOW (World of Women), Jeevee, Burst Neembu fizz, Himalayan Java, Smritipatra, Jhigu newa bajah khala, Taal nritya bhumi, Pathao, QFX, eSewa, Bajra nasaa khala, ISS, onepasal, Crayons Corp., and The Kathmandu Post.",
            "The organizers have encouraged individuals, organizations, and communities to participate in PinkWalk 2026 and join the collective effort to raise awareness about breast cancer and show solidarity with those affected by the disease.",
          ],
        },
      ],
      highlights: [
        "Registration Methods: Online (pinkwalk.github.io/register) or via eSewa App (Voting & Events → Pink Walk)",
        "Event Date: Saturday, October 3, 2026 (Ashoj 17, 2083)",
        "Start Time & Route: 6:00 AM, Kathmandu Durbar Square (Basantapur) → Patan Durbar Square (Mangal Bazar)",
        "Organizers: Infinite Cares in collaboration with Cancer Care Nepal",
        "Official Registration Link: https://pinkwalk.github.io/register",
      ],
    },
    nepaliContent: {
      title: "पिंकवाक २०२६ मा सहभागी हुन दर्ता खुला",
      subtitle:
        "आगामी असोज १७ गते शनिवार हुने पदयात्रामा सहभागी हुन ईसेवा एप वा अनलाइन पोर्टल मार्फत दर्ता गर्न सकिने",
      date: "१४ असोज २०८३",
      location: "काठमाडौं, नेपाल",
      author: "इन्फिनिट केयर्स तथा पिंकवाक २०२६ समिति",
      summary:
        "स्तन क्यान्सरसम्बन्धी जनचेतना अभिवृद्धि गर्ने उद्देश्यले आयोजना हुन लागेको ‘पिंकवाक २०२६’ मा सहभागी हुनका लागि दर्ता खुला गरिएको छ। ईसेवा वा आधिकारिक अनलाइन फारममार्फत दर्ता गर्न सकिनेछ।",
      content: {
        lead: "काठमाडौं, १४ असोज २०८३ — स्तन क्यान्सरसम्बन्धी जनचेतना अभिवृद्धि गर्ने उद्देश्यले आयोजना हुन लागेको ‘पिंकवाक २०२६’ मा सहभागी हुनका लागि दर्ता खुला गरिएको छ।",
        sections: [
          {
            heading: "कार्यक्रम विवरण र पदयात्रा मार्ग",
            paragraphs: [
              "आगामी असोज १७ गते शनिबार बिहान ६ बजे काठमाडौंको बसन्तपुरस्थित काठमाडौं दरबार स्क्वायरदेखि ललितपुरको मंगलबजारस्थित पाटन दरबार स्क्वायरसम्म आयोजना हुने पदयात्रामा सहभागी हुन इच्छुक व्यक्ति, संघसंस्था तथा समुदायका सदस्यले ईसेवामार्फत अनलाइन फारम भरी दर्ता गर्न सक्नेछन्।",
              "पिंकवाकमा सहभागी हुन दुई माध्यमबाट दर्ता गर्न सकिने आयोजकले जनाएको छ।",
            ],
          },
          {
            heading: "दर्ता प्रक्रिया",
            paragraphs: [
              "सहभागीले https://pinkwalk.github.io/register मा गई पृष्ठमा उपलब्ध QR कोड स्क्यान गरी आवश्यक विवरण भरेर दर्ता गर्न सक्नेछन्।",
              "वा सोझै ईसेवा एपबाटै: ईसेवा एप खोलेर Voting & Events मा गई Pink Walk छनोट गरी दर्ता गर्न सकिनेछ।",
            ],
          },
          {
            heading: "उद्देश्य तथा सहभागिता",
            paragraphs: [
              "स्तन क्यान्सरको प्रारम्भिक पहिचान, नियमित स्वास्थ्य परीक्षण, समयमै उपचार तथा क्यान्सर प्रभावित व्यक्ति र परिवारप्रति ऐक्यबद्धताको सन्देश फैलाउने उद्देश्यले आयोजना हुने पिंकवाकमा स्वास्थ्यकर्मी, क्यान्सरबाट निको भएका व्यक्ति, प्रभावित परिवार, विभिन्न संघसंस्था, सञ्चारकर्मी तथा सर्वसाधारणको सहभागिता रहने अपेक्षा गरिएको छ।",
            ],
          },
          {
            heading: "आयोजक, संरक्षक तथा साझेदार संस्थाहरू",
            paragraphs: [
              "पिंकवाक २०२६ इन्फिनिट केयर्सले क्यान्सर केयर नेपालसँगको सहकार्यमा आयोजना गर्दैछ। कार्यक्रममा काठमाडौं महानगरपालिका, ललितपुर महानगरपालिका तथा नेपाल क्यान्सर सर्भाइभर्स सोसाइटीलगायत संस्थाको सहयोग रहेको छ।",
              "कार्यक्रमलाई नेशनल क्यान्सर अस्पताल, म्याक्स फाउन्डेसन, नोभाला बायोटेक, क्याम्स (Center for American Medical Specialists), ले मोनाल (Le Monal), स्‍नो ड्रप्स (Snow drops H₂O), नेट टिभी, उनो (Uno), ह्याप्पी माइन्डस्, वाउ (WOW – World of Women), जीभी (Jeevee), बर्स्ट निम्बू फिज्ज, हिमालयन जाभा, स्मृतिपत्र, झिगु नेवाः बाजं खलः, पठाओ, क्यू एफ एक्स (QFX), इसेवा, बज्र नासः खलः, ताल नृत्य भूमि, आइ एस एस (ISS), वानपसल (onepasal), क्रेयन्स् कोर्प (Crayons Corp.) तथा काठमाडौँ पोस्ट लगायत विभिन्न संस्था तथा व्यवसायले साझेदारी गरेका छन्।",
              "आयोजकले स्तन क्यान्सरविरुद्धको सचेतना अभियानमा सामूहिक सहभागिता र ऐक्यबद्धता जनाउन सबैलाई पिंकवाक २०२६ मा सहभागी हुन आग्रह गरेको छ।",
            ],
          },
        ],
        highlights: [
          "दर्ता प्रक्रिया: अनलाइन (pinkwalk.github.io/register) वा ईसेवा एप (Voting & Events → Pink Walk)",
          "कार्यक्रम मिति: असोज १७, २०८३ शनिवार (अक्टोबर ३, २०२६)",
          "समय र मार्ग: बिहान ६:०० बजे, बसन्तपुर (काठमाडौं दरबार स्क्वायर) → मंगलबजार (पाटन दरबार स्क्वायर)",
          "आयोजक: इन्फिनिट केयर्स (क्यान्सर केयर नेपालसँगको सहकार्यमा)",
          "दर्ता लिङ्क: https://pinkwalk.github.io/register",
        ],
      },
    },
    mediaContact: {
      name: "Organizing Committee",
      organization: "PinkWalk Media Desk",
      email: "pinkwalknepal@gmail.com",
      location: "Kathmandu, Nepal",
    },
  },
  {
    id: "pinkwalk-2026-official-announcement",
    title:
      "PinkWalk 2026 to Bring the Community Together for Breast Cancer Awareness and Support",
    subtitle:
      "Organized by Infinite Cares in collaboration with Cancer Care Nepal, taking place on October 3, 2026 (Ashoj 17, 2083) at 6:00 AM from Basantapur to Mangal Bazaar, Lalitpur.",
    date: "September 15, 2026",
    isoDate: "2026-09-15",
    location: "Kathmandu, Nepal",
    author: "Infinite Cares & PinkWalk 2026 Committee",
    category: "Announcement",
    summary:
      "PinkWalk 2026, organized by Infinite Cares in collaboration with Cancer Care Nepal, takes place on October 3, 2026 (Ashoj 17, 2083) from Kathmandu Durbar Square (Basantapur) to Patan Durbar Square (Mangal Bazaar).",
    content: {
      lead: "KATHMANDU, NEPAL — September 15, 2026 — PinkWalk 2026, a community awareness initiative aimed at raising awareness about breast cancer, highlighting the importance of early detection, and expressing solidarity with individuals and families affected by cancer, is set to take place on Ashoj 17, 2083 (October 3, 2026) at 6:00 AM in Kathmandu.",
      sections: [
        {
          heading: "Route and Participants",
          paragraphs: [
            "Organized by Infinite Cares in collaboration with Cancer Care Nepal, PinkWalk 2026 will begin at Kathmandu Durbar Square in Basantapur and conclude at Patan Durbar Square in Mangal Bazaar, Lalitpur.",
            "The event is expected to bring together healthcare professionals, cancer survivors and affected families, representatives from various organizations and partner institutions, press as well as members of the general public.",
          ],
        },
        {
          heading: "Promoting Early Detection and Social Support",
          paragraphs: [
            "Breast cancer can be treated more effectively when detected at an early stage. PinkWalk 2026 aims to encourage regular health checkups, early detection, timely treatment, and greater awareness within the community. The initiative will also highlight the importance of social and emotional support for individuals and families going through cancer treatment and recovery.",
            "Speaking on behalf of Infinite Cares, Dijup Tuladhar who leads the unit, informed that PinkWalk is intended to be more than just a walk, describing it as a collective campaign of awareness, hope, courage, and solidarity.",
          ],
        },
        {
          heading: "Organizing Partners and Sponsors",
          paragraphs: [
            "PinkWalk 2026 is being organized by Infinite Cares in partnership with Cancer Care Nepal, National Hospital and Cancer Center, ISS Sound, Novala Biotech, Pathao Nepal, Esewa, Happy minds and WOW (World of Women), with support from the Nepal Cancer Survivors Society, Kathmandu Metropolitan City and Lalitpur Metropolitan City.",
            "Owing to tremendous success of the first Pinkwalk in 2023, with over 600 participants having completed walk from Naraynchaur, Naxal to Swayambhu, the initiative continues its commitment to promoting breast cancer awareness, early detection, community participation, and support for people affected by cancer.",
          ],
        },
        {
          heading: "About Infinite Cares & Cancer Care Nepal",
          paragraphs: [
            "Infinite Cares is a community initiative under the Corporate Social Responsibility (CSR) efforts of Infinite Software Services Nepal Pvt. Ltd., the Nepal-based software IT services center of Infinite Computer Solutions, a multinational technology services and digital engineering company, with more than 600 professionals in Nepal. Beyond technology and business, Infinite is committed to creating a positive impact in society through various CSR and community initiatives. PinkWalk 2026 is one such initiative, reflecting Infinite’s commitment to building a healthier, more inclusive, and sustainable society while raising awareness and supporting important social causes.",
            "Cancer Care Nepal is a non-profit organization dedicated to cancer awareness, prevention, early detection, and patient support across Nepal. We work alongside hospitals, health professionals, communities, and donors so that no one is denied information, screening, or care because of where they live or what they can afford.",
          ],
        },
      ],
      quote: {
        text: "PinkWalk is not just a walk; it is a collective expression of awareness, hope, courage, and solidarity. Our goal is to create an environment where people can talk openly about breast cancer, understand the importance of early detection, and encourage the community to stand beside individuals and families affected by cancer. We invite everyone to participate in PinkWalk 2026 and help make this campaign a meaningful success.",
        author: "Dijup Tuladhar",
        title: "Lead, Infinite Cares",
      },
      highlights: [
        "Event Date: Ashoj 17, 2083 (October 3, 2026)",
        "Time: 6:00 AM",
        "Route: Kathmandu Durbar Square (Basantapur) → Patan Durbar Square (Mangal Bazaar, Lalitpur)",
        "Organizers: Infinite Cares in collaboration with Cancer Care Nepal",
        "Official Website: https://pinkwalk.github.io/",
      ],
    },
    nepaliContent: {
      title: "स्तन क्यान्सर सचेतनाका लागि ‘पिंकवाक २०२६’ आयोजना हुँदै",
      subtitle:
        "असोज १७ गते शनिवार (अक्टोबर ३, २०२६) बिहान ६ बजे बसन्तपुरदेखि मंगलबजारसम्म पदयात्रा हुने",
      date: "३० भदौ २०८३",
      location: "काठमाडौं, नेपाल",
      author: "इन्फिनिट केयर्स तथा पिंकवाक २०२६ समिति",
      summary:
        "स्तन क्यान्सरसम्बन्धी जनचेतना अभिवृद्धि, प्रारम्भिक पहिचानको महत्वबारे जानकारी फैलाउने तथा क्यान्सर प्रभावित व्यक्ति र परिवारप्रति ऐक्यबद्धता जनाउने उद्देश्यले ‘पिंकवाक २०२६’ आयोजना हुने भएको छ।",
      content: {
        lead: "काठमाडौं, ३० भदौ २०८३ — स्तन क्यान्सरसम्बन्धी जनचेतना अभिवृद्धि, प्रारम्भिक पहिचानको महत्वबारे जानकारी फैलाउने तथा क्यान्सर प्रभावित व्यक्ति र परिवारप्रति ऐक्यबद्धता जनाउने उद्देश्यले ‘पिंकवाक २०२६’ आयोजना हुने भएको छ।",
        sections: [
          {
            heading: "पदयात्रा मार्ग र सहभागीहरू",
            paragraphs: [
              "इन्फिनिट केयर्सले क्यान्सर केयर नेपालसँगको सहकार्यमा आयोजना गर्न गइरहेको पिंकवाक आगामी असोज १७ गते शनिवार (अक्टोबर ३, २०२६), बिहान ६ बजे शुरु हुनेछ। यस अन्तर्गत सहभागीहरूले बसन्तपुरस्थित काठमाडौं दरबार स्क्वायरदेखि ललितपुरको मंगलबजारस्थित पाटन दरबार स्क्वायरसम्म पदयात्रा गर्नु हुनेछ।",
              "पिंकवाकमा स्वास्थ्यकर्मी, क्यान्सरबाट निको भएका व्यक्ति तथा प्रभावित परिवार, विभिन्न संघसंस्था, साझेदार संस्था, सञ्चारकर्मी तथा सर्वसाधारणको सहभागिता रहने आयोजकले जनाएको छ।",
            ],
          },
          {
            heading: "प्रारम्भिक पहिचान र सामाजिक सहयोग",
            paragraphs: [
              "स्तन क्यान्सर समयमै पहिचान गर्न सके उपचार प्रभावकारी हुने भएकाले नियमित स्वास्थ्य परीक्षण, प्रारम्भिक पहिचान र समयमै उपचारका विषयमा समुदायमा सचेतना फैलाउनु कार्यक्रमको प्रमुख उद्देश्य रहेको आयोजकको भनाइ छ। साथै, क्यान्सर उपचार तथा पुनःस्थापनाको क्रममा रहेका व्यक्ति र परिवारलाई सामाजिक तथा भावनात्मक सहयोग आवश्यक रहेको सन्देश पनि कार्यक्रममार्फत प्रवाह गरिनेछ।",
              "इन्फिनिट केयर्सका तर्फबाट दिजुप तुलाधर इकाई प्रमुखले पिंकवाकलाई केवल पदयात्रामा सीमित नभई सचेतना, आशा, साहस र ऐक्यबद्धताको सामूहिक अभियानका रूपमा अघि बढाउन खोजिएको बताउनुभयो।",
            ],
          },
          {
            heading: "आयोजक, साझेदार तथा विगतको अनुभव",
            paragraphs: [
              "पिंकवाक २०२६ क्यान्सर केयर नेपाल, नेशनल अस्पताल तथा क्यान्सर सेन्टर, आईएसएस साउन्ड, नोभाला बायोटेक, पठाओ नेपाल, इसेवा, ह्याप्पी माइन्डस्, WOW (World of Women), साझेदारीमा आयोजना हुँदैछ भने नेपाल क्यान्सर सर्भाइभर्स सोसाइटी, काठमाडौँ महानगरपालिका तथा ललितपुर महानगरपालिकाको सहयोग रहेको छ।",
              "पिंकवाकको पहिलो संस्करण २०८० असोजमा सम्पन्न भएको थियो जसमा ६०० भन्दा बढी सहभागीहरूले स्तन क्यान्सर सम्बन्धी जानकारी दिने सामाग्रीका साथ नारायण चौर नक्सालदेखि स्वयम्भुसम्मको पदयात्रा सम्पन्न गरेर भव्यरुपमा सफल बनाउनु भएको थियो । यस अभियानको दोस्रो संस्करणले पनि स्तन क्यान्सरसम्बन्धी सचेतना, प्रारम्भिक पहिचान, सामुदायिक सहभागिता तथा क्यान्सर प्रभावित व्यक्तिहरूलाई सहयोग गर्ने उद्देश्यलाई निरन्तरता दिएको आयोजकले जनाएको छ।",
            ],
          },
          {
            heading: "इन्फिनिट केयर्स र क्यान्सर केयर नेपालबारे",
            paragraphs: [
              "इन्फिनिट केयर्स इन्फिनिट सफ्टवेयर सर्भिसेज नेपाल प्रा.लि.को सामाजिक उत्तरदायित्व (CSR) सामुदायिक पहलहरूमध्येको अन्तर्गत गरिने एक कार्यक्रम हो । इन्फिनिट सफ्टवेयर सर्भिसेज नेपाल प्रा.लि. बहुराष्ट्रिय आईटी सेवा तथा डिजिटल इन्जिनियरिङ क्षेत्रमा कार्यरत कम्पनी इन्फिनिट कम्प्युटर सोलुसन्सको नेपालस्थित सफ्टवेयर विकास तथा आईटी सेवा केन्द्र हो, जहाँ ६०० भन्दा बढी जनशक्ति कार्यरत छन्। नेपालमा इन्फिनिटले व्यवसाय र प्रविधिसँगै विभिन्न सामाजिक उत्तरदायित्व (CSR) तथा सामुदायिक पहलहरूमार्फत समाजमा सकारात्मक प्रभाव सिर्जना गर्ने उद्देश्यका साथ काम गर्दै आएको छ। पिंकवाक पनि स्वस्थ, समावेशी र दिगो समाज निर्माणमा योगदान पुऱ्याउने यस्तै सामाजिक पहलको एक अभियान हो।",
              "क्यान्सर केयर नेपाल नेपालभर क्यान्सरसम्बन्धी जनचेतना अभिवृद्धि, रोकथाम, प्रारम्भिक पहिचान तथा क्यान्सर प्रभावित बिरामीलाई आवश्यक सहयोग प्रदान गर्ने उद्देश्यले समर्पित गैरनाफामूलक संस्था हो। संस्थाले अस्पताल, स्वास्थ्यकर्मी, समुदाय तथा दातृ निकायहरूसँग सहकार्य गर्दै व्यक्तिको बसोबास गर्ने स्थान वा आर्थिक अवस्थाका कारण क्यान्सरसम्बन्धी आवश्यक जानकारी, स्वास्थ्य परीक्षण तथा उपचारबाट कोही पनि वञ्चित नहोस् भन्ने उद्देश्यका साथ काम गर्दै आएको छ।",
            ],
          },
        ],
        quote: {
          text: "पिंकवाक केवल एउटा पदयात्रा होइन, यो सचेतना, आशा, साहस र ऐक्यबद्धताको सामूहिक अभिव्यक्ति हो। स्तन क्यान्सरका बारेमा खुलेर कुरा गर्ने वातावरण निर्माण गर्नु, प्रारम्भिक पहिचानको महत्व बुझाउनु र क्यान्सरबाट प्रभावित व्यक्ति तथा परिवारको साथमा समुदायलाई उभ्याउनु हाम्रो मुख्य उद्देश्य हो। सबैलाई पिंकवाक २०२६ मा सहभागी भई यस अभियानलाई सफल बनाउन सहयोग गर्न आग्रह गर्दछौं",
          author: "दिजुप तुलाधर",
          title: "इकाई प्रमुख, इन्फिनिट केयर्स",
        },
        highlights: [
          "कार्यक्रम मिति: असोज १७, २०८३ शनिवार (अक्टोबर ३, २०२६)",
          "समय: बिहान ६:०० बजे",
          "पदयात्रा मार्ग: काठमाडौं दरबार स्क्वायर (बसन्तपुर) → पाटन दरबार स्क्वायर (मंगलबजार, ललितपुर)",
          "आयोजक: इन्फिनिट केयर्स (क्यान्सर केयर नेपालसँगको सहकार्यमा)",
          "आधिकारिक वेबसाइट: https://pinkwalk.github.io/",
        ],
      },
    },
    mediaContact: {
      name: "Organizing Committee",
      organization: "PinkWalk Media Desk",
      email: "pinkwalknepal@gmail.com",
      location: "Kathmandu, Nepal",
    },
  },
  // {
  //   id: "cotiviti-pinkwalk-2023-press-release",
  //   title:
  //     "Cotiviti Takes Steps Towards a Healthier Tomorrow: Join the Walkathon for Breast Cancer Awareness",
  //   subtitle:
  //     "Cotiviti Cares (Cotiviti Nepal's CSR Team) announces its inaugural PINKWalk, a walkathon to raise breast cancer awareness and gather funds for Cancer Care Nepal Society.",
  //   date: "September 26, 2023",
  //   isoDate: "2023-09-26",
  //   location: "Kathmandu, Nepal",
  //   author: "Cotiviti Cares (Cotiviti Nepal CSR Team)",
  //   category: "Announcement",
  //   summary:
  //     "Cotiviti Cares announces its inaugural PINKWalk to raise breast cancer awareness and collect funds for Cancer Care Nepal Society. The walkathon takes place on September 30, 2023, from Narayan Chaur to Swayambhu.",
  //   content: {
  //     lead: "KATHMANDU, NEPAL — September 26, 2023 — Cotiviti Cares (Cotiviti Nepal's CSR Team) announces its inaugural PINKWalk, a walkathon to raise breast cancer awareness and gather funds for this significant cause.",
  //     sections: [
  //       {
  //         heading: "Global Context & Urgent Need for Awareness",
  //         paragraphs: [
  //           "Breast cancer is a pressing health concern. 1 out of 8 cancer diagnoses worldwide is breast cancer. As per 2020 data, there were about 2.3 million new cases of breast cancer globally and has resulted in 685,000 deaths. A study by International Agency for Research on Cancer (IARC) has indicated that by 2040 this number will increase by 40% and the death number shall rise up to 50%.",
  //           "Cotiviti Nepal Pvt. Ltd. is a prominent player in the healthcare informatics sector headquartered in the USA and a leading IT company in Nepal. The company's CSR initiatives primarily focus on supporting the community in areas such as health, education, and the environment. Cotiviti is therefore pleased to announce its first-ever walkathon event to promote awareness on breast cancer, a serious health concern.",
  //         ],
  //       },
  //       {
  //         heading: "Community Objectives & Partner Support",
  //         paragraphs: [
  //           "The primary objective of this walkathon, is to enhance awareness of the disease, encourage early detection, provide solidarity to those affected, and raise funds for research, treatment, and support. The donations collected during the walkathon will be directed to the Cancer Care Nepal Society, an associated partner of this event, furthering its efforts to combat this disease and support affected individuals and their families.",
  //           "Participants can register for the event via IMEPay, making it convenient for all to join. Additionally, on-the-spot registration will also be available on the day of the event.",
  //         ],
  //       },
  //       {
  //         heading: "Walkathon Route & Concluding Event",
  //         paragraphs: [
  //           "PinkWalk is set to take place on September 30, 2023, starting at 6:00 AM, and will wind through some of Kathmandu's major landmarks, including Narayan Chaur, Nagpokhari, Kantipath, Sohrakhutte, Shovabhagwati, and Swayambhu. Swayambhu is where the concluding event will take place, featuring several activities planned by Cotiviti Nepal.",
  //           "Cotiviti is committed to making a positive impact on the communities it serves. We are happy to organize this PinkWalk with many partners and sponsors and feel proud to come together as a community for a novel cause. This walkathon welcomes participants from all age groups and walks of life.",
  //         ],
  //       },
  //     ],
  //     highlights: [
  //       "Event Date: September 30, 2023",
  //       "Time: 6:00 a.m. – 10:00 a.m.",
  //       "Location: Starting at Narayan Chaur, Kathmandu",
  //       "Associated Partner: Cancer Care Nepal Society",
  //       "Official Site: https://pinkwalk.github.io/",
  //     ],
  //   },
  //   mediaContact: {
  //     name: "Organizing Committee",
  //     organization: "PinkWalk Media Desk",
  //     email: "pinkwalknepal@gmail.com",
  //     location: "Kathmandu, Nepal",
  //   },
  // },
];
