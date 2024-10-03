import React from 'react';
import classes from './index.module.scss';
import { TO_GMAIL } from '@/shared/helpers/constant';

const privacyContent = [
  {
    title: 'Minors',
    content: 'This Site is not intended for children use. If you are a minor (under the age of 18), you can use this service only with the consent of your parents or legal guardians. If you are a minor, please do not submit any personal information to this Site. IF YOU ARE 13 YEARS OR YOUNGER, PLEASE DO NOT USE THIS SITE OR ANY OF ITS SERVICES FOR ANY PURPOSE AT ANY TIME. This Site is not intended for any children under the age of 13.',
  },
  {
    title: 'Your Personal Information',
    content: 'Your personal information is what identifies you as a person, such as your name, phone number, home or work addresses, etc. We ask for these things when quoting and/or booking your order.',
  },
  {
    title: 'Your Use of Our Site',
    content: 'We track an algorithm of information about you, basing the algorithm off of your use of our website; your demography, diversion, and behaviors are used to better recognize and provide our potential clientele with knowledgeable information. With this, the information is inspected and collected on a gross basis. I.e,., the webpage you were previously on, the webpage you go to next, your specific browser, IP address, and others.',
  },
  {
    title: 'Your Reviews and Posts',
    content: 'If you decide to disclose your information on our website, we may collect your information if you leave a review on our website or any of our review sites, such as Google or .',
  },
  {
    title: 'Your Correspondence\n',
    content: 'By sending us text messages, emails, or other forms of personal communication, or if third parties send us information about a post from you, we may use that information in a specific file for you.\n' +
      '\n',
  },
];

const secondPrivacyContent = [
  {
    title: 'To provide services to you\n',
    content: 'Unique Autoshipping uses your information to provide you with our services to the best of our ability for normal operations; none of your information is disclosed to others or sold by Unique Autoshipping for any reason under any circumstance. If you do not give us the information we need, we would not be able to provide you with any services.\n' +
      '\n',
  },
  {
    title: 'Administrative Notices\n',
    content: 'Your data such as your e-mail address, your mailing address, and phone number are used to contact you regarding administrative notices, new product offerings, and communications relevant to your use of the Site. If wish to NO LONGER receive these communications, please contact Unique Autoshipping LLC at support@uniqueautoshipping.com.\n' +
      '\n',
  },
  {
    title: 'Consent\n',
    content: 'By submitting your phone number and clicking submit, you agree to our Terms and Privacy Policy and permit us to send or start automated sales calls, text messages, and prerecorded voicemails to that phone number. Your consent is not required in order to purchase any items, commodities, or services. Rates for messages and data use may apply.\n' +
      '\n',
  },
  {
    title: 'Dispute Resolution\n',
    content: 'We make use of the information in our file on you, as well as information about your current and previous activity on the Site, to resolve disputes, troubleshoot issues, and enforce our Site Terms of Use.\n' +
      '\n',
  },
  {
    title: 'Our Disclosure to Third Parties\n',
    content: 'We understand the value of privacy and take reasonable steps to safeguard it. We never sell or give away any of your personal information. The following are some examples of how your personal information may be shared: Your personally identifiable information is not shared with third parties unless you give us permission to do so. By submitting an order - If you want to modify, amend, or delete your personal information, you may do so by visiting our website\'s "Contact Us" page. - You have the option of granting us permission to disclose your information or opting in/out of subsequent sharing. - Our business is subject to the US Federal Trade Commission\'s examination and enforcement procedure. - We must provide any and all information to public authorities, national security, and law enforcement in the case of a legal proceeding. - At the moment of delivery, we must disclose your personal information to third parties (phone numbers, addresses, and names, for example) (transport carriers). This will be communicated to you both during the collection of your data and prior to its publication.\n' +
      '\n',
  },
  {
    title: 'Law Enforcement\n',
    content: 'In the case of a legal situation involving us (fraud, informal copyright, etc. ), we reserve the right to disclose any personal information about you that we believe is required or relevant.\n' +
      '\n',
  },
  {
    title: 'Advertisers\n',
    content: 'We may share information about our users with our advertisers for marketing reasons; however, none of this information is personal information about you and will not be sold or solicited.\n' +
      '\n',
  },
  {
    title: 'No Spam\n',
    content: 'Both us and our customers have a zero-tolerance policy for spam. Without limiting the above, you are not permitted to add a Unique Autoshipping LLC user to your mailing list (e-mail or physical mail) without first obtaining their explicit agreement after proper disclosure.\n' +
      '\n',
  },
  {
    title: 'Disclosures You Make to Third Parties\n',
    content: 'Unique Autoshipping LLC will take great efforts to safeguard any kind of personal information. Unique Autoshipping LLC cannot ensure total security and is not responsible or accountable for any personal data disclosures, including but not limited to data transfer failures, hackers, or errors caused by Unique Autoshipping LLC. For instance, any third party might get unauthorized access to your information using our website.\n' +
      '\n',
  },
];

export const PrivacyContent = () => {
  return (
    <div className={classes.contentWrapper}>
      <h1 className={classes.contentTitle}>Privacy and policy</h1>
      <p className={classes.contentText}>
        Welcome! Here at Unique Autoshipping we know that privacy is important to you and to us. In order to provide you
        (the individual inquiring about our services about accessing our site) with the best service and most accurate
        pricing, Unique Autoshipping collects information about you, and we , in some cases, may share that information
        with necessary parties. The following privacy policy explains exactly what information we collect, why we
        collect it, and who we share it with, as well as how we keep it protected. You are also recommended to read our
        Terms of Use to understand the general rules about your use of this Site, and any additional terms that may
        apply when you access particular services or materials on certain areas of this Site. While using our website
        and its content, you are agreeing to and consenting to the most recent version of this Policy. “We,” “our” means
        Unique Autoshipping and its affiliates. “You,” “your,” ”visitor,” or “user” means the individual accessing this
        site and our services.
      </p>
      {
        privacyContent.map((item, index) =>
          <div key={index}>
            <h3 className={classes.contentItemTitle}>{item.title}</h3>
            <p className={classes.contentText}>{item.content}</p>
          </div>,
        )
      }
      <h1 className={classes.contentTitle}>What do we do with Your Information</h1>
      {
        secondPrivacyContent.map((item, index) =>
          <div key={index}>
            <h3 className={classes.contentItemTitle}>{item.title}</h3>
            <p className={classes.contentText}>{item.content}</p>
          </div>,
        )
      }
      <h1 className={classes.contentTitle}>What You Can Do about Your Personal Information</h1>
      <p className={classes.contentText}>You have certain rights relating to your personal data, subject to local data
        protection laws. Depending on the applicable laws and, in particular, if you are located in the EEA, these
        rights may include: - To access your Personal Data held by us (right to access); - To rectify inaccurate
        Personal Data and, taking into account the purpose of processing the Personal Data, ensure it is complete (right
        to rectification); - To erase/delete your Personal Data, to the extent permitted by applicable data protection
        laws (right to erasure; right to be forgotten); - To restrict our processing of your Personal Data, to the
        extent permitted by law (right to restriction of processing); To transfer your Personal Data to another
        controller, to the extent possible (right to data portability); - To object to any processing of your Personal
        Data carried out on the basis of our legitimate interests (right to object). Where we process your Personal Data
        for direct marketing purposes or share it with third parties for their own direct marketing purposes, you can
        exercise your right to object at any time to such processing without having to provide any specific reason for
        such objection; - Not to be subject to a decision based solely on automated processing, including profiling,
        which produces legal effects (&#34;Automated Decision-Making&#34;). Automated Decision-Making currently does not
        take
        place on our Sites; and - To the extent we base the collection, processing and sharing of your Personal Data on
        your consent, to withdraw your consent at any time, without affecting the lawfulness of the processing based on
        such consent before its withdrawal. Any and all questions, comments, concerns, and requests can be sent to
        support@uniqueautoshipping.org](mailto:support@uniqueautoshipping.org)
      </p>

      <h3 className={classes.contentItemTitle}>Governing Law</h3>
      <p className={classes.contentText}>This Privacy Policy shall be governed by the laws of the State of Ohio without
        regard to its conflict of laws principles.</p>

      <h3 className={classes.contentItemTitle}>Contacting Us</h3>
      <p className={classes.contentText}>Unique Autoshipping LLC</p>
      <p className={classes.contentText}>www.uniqueautoshipping.org</p>
      <p className={classes.contentText}>{TO_GMAIL}</p>
      <p className={classes.contentText}>2139 New Era Rd, Unit 8201 Sevierville, Tennessee 37862-5428, United States</p>
      <p className={classes.contentText}>(917) 627-5498 (865) 776-9121</p>
    </div>
  );
};