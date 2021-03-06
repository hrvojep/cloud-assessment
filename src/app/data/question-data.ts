import ICSVItem from '../classes/ICSVItem';

export const QuestionData: ICSVItem[] = [
  {
    'Category': 'General',
    'Sub_category': '',
    'Quality': 'Data classification',
    'Description': '<p>Government agencies are required to safeguard all official information to ensure its confidentiality, integrity, and availability.</p>\n<p><strong>Select the classification of the data that this service will use.</strong></p>',
    'Reference': '<p>Learn more about the \n<a href="https://www.protectivesecurity.gov.au/informationsecurity/Documents/AustralianGovernmentclassificationsystem.pdf" target="_blank">Australian Government security classification system</a>.</p>',
    'Condition': '',
    'Relationship': '',
    'Value_type': 'XOR',
    'Value_options': 'Unclassified: DLM, Protected, Confidential, Secret, Top secret',
    'Required_or_default_value': '',
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  },
  {
    'Category': 'General',
    'Sub_category': '',
    'Quality': 'Cloud model',
    'Description': '<p>Cloud services are categorised into 3 models - Software as a Service, Platform as a Service and Infrastructure as a Service.</p>\n<p><strong>Select the cloud model for the service you are assessing.</strong></p>',
    'Reference': '<p>Learn more about cloud models in section 2 of the <a href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf" target="_blank">NIST Definition of Cloud Computing</a>.</p>',
    'Condition': '',
    'Relationship': '',
    'Value_type': 'XOR',
    'Value_options': 'Infrastructure as a Service (IaaS), Platform as a Service (PaaS), Software as a Service (SaaS)',
    'Required_or_default_value': '',
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  },
  {
    'Category': 'Vendor',
    'Sub_category': '',
    'Quality': 'Financial viability',
    'Description': '<p>It’s important to check that your vendor is financially stable.</p>\n<p>You can do this by checking if the vendor:</p>\n<p> <ul><li>has a track record of stability</li>\n<li>is in a healthy financial position.</ul></p>\n<p><strong>How financially stable do you think the vendor is?</strong></p>',
    'Reference': '<p>Learn more about assessing financial viability by visiting the <a href="https://www.finance.gov.au/procurement/procurement-policy-and-guidance/buying/contract-issues/assessing-financial-viability/practice.html" target="_blank">Department of Finance\'s website</a>.</p>',
    'Condition': '',
    'Relationship': '',
    'Value_type': 'Integer',
    'Value_options': '1, 2, 3, 4, 5',
    'Required_or_default_value': 4,
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  },
  {
    'Category': 'Vendor',
    'Sub_category': '',
    'Quality': 'Agency adoption',
    'Description': '<p>Knowing if the service is being used by other government agencies or reputable companies can provide assurance and help assess risk.</p>\n<p><strong>How broadly do you think the vendor\'s services are being used by other agencies?</strong></p>',
    'Reference': '<p>Visit the vendor\'s website and look for case studies and a list of existing clients.</p>',
    'Condition': '',
    'Relationship': '',
    'Value_type': 'Integer',
    'Value_options': '1, 2, 3, 4, 5',
    'Required_or_default_value': 2,
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  },
  {
    'Category': 'Vendor',
    'Sub_category': '',
    'Quality': 'Strategy alignment',
    'Description': '<p>Making sure a vendor\'s future plans for a cloud service align with your own business strategy can help assess the service\'s suitability.</p>\n<p><strong>How well do you think the vendor future plans aligns with your business strategy?</strong></p>',
    'Reference': '<p>Visit the vendor\'s website and review their product roadmap. If they don\'t have one available, request this information.</p>',
    'Condition': '',
    'Relationship': '',
    'Value_type': 'Integer',
    'Value_options': '1, 2, 3, 4, 5',
    'Required_or_default_value': 1,
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  },
  {
    'Category': 'Commercials',
    'Sub_category': '',
    'Quality': 'Existing relationship',
    'Description': '<p>Not having a pre-existing relationship with a potential vendor doesn’t lower the service quality, but having an established relationship can help assess risk.</p>\n<p><strong>How do you think the vendor rates in terms of an existing relationship?</strong></p>',
    'Reference': '<p>Your finance team can help you confirm  if your organisation has worked with this vendor before.</p>',
    'Condition': '',
    'Relationship': '',
    'Value_type': 'Integer',
    'Value_options': '1, 2, 3, 4, 5',
    'Required_or_default_value': 1,
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  },
  {
    'Category': 'Commercials',
    'Sub_category': '',
    'Quality': 'Price transparency',
    'Description': '<p>It is important to ensure that all costs for the service are clear and understandable.</p>\n<p><strong>How well do you think the service clearly outlines all costs?</strong></p>',
    'Reference': '<p>Don’t forget to look at costs for contract termination, additional usage, and other unplanned changes to the service.</p>',
    'Condition': '',
    'Relationship': '',
    'Value_type': 'Integer',
    'Value_options': '1, 2, 3, 4, 5',
    'Required_or_default_value': 4,
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  },
  {
    'Category': 'Commercials',
    'Sub_category': '',
    'Quality': 'Value for money',
    'Description': '<p>When procuring a service for government, you need to ensure value for money.</p>\n\n<p><strong>How well do you think the service provides government value for money?</strong></p>',
    'Reference': '<p>Learn more about assessing value for money by visiting the Department of Finance’s <a href="https://www.finance.gov.au/procurement/procurement-policy-and-guidance/commonwealth-procurement-rules" target="_blank">Commonwealth Procurement Rules</a>.</p>\n<p>You can also check the <a href="https://www.finance.gov.au/policy-guides-procurement/cloud-services-panel/" target="_blank">Cloud Services Panel</a> to see if the service has already been assessed.</p>',
    'Condition': '',
    'Relationship': '',
    'Value_type': 'Integer',
    'Value_options': '1, 2, 3, 4, 5',
    'Required_or_default_value': 3,
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  },
  {
    'Category': 'Commercials',
    'Sub_category': '',
    'Quality': 'Service Level Agreement Transparency',
    'Description': '<p>A Service Level Agreement (SLA) is important for defining how the service will be provided.</p>\n<p>Consider whether the SLA clearly defines:</p>\n<p>\n<ul><li>Availability</li>\n<li>Responsibilities</li>\n<li>Delivery</li>\n<li>Support</li></ul></p>\n<p><strong>How clear and understandable do you think the Service Level Agreement (SLA) terms are?</strong></p>',
    'Reference': '<p>The <a href="https://www.iso.org/standard/67545.html" target="_blank">ISO 19086 standard</a> is a useful resource for assessing Service Level Agreement terms.</p>',
    'Condition': '',
    'Relationship': '',
    'Value_type': 'Integer',
    'Value_options': '1, 2, 3, 4, 5',
    'Required_or_default_value': 4,
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  },
  {
    'Category': 'Commercials',
    'Sub_category': '',
    'Quality': 'Legal protections',
    'Description': '<p>It is important to understand the legal protections for your agency. Things to look for in the SLA or contract include:</p>\n<p>\n<ul><li>The extent to which the vendor can change the terms of service</li>\n<li>The consequences if the SLAs are not met</li> \n<li>What happens if the vendor stops trading</li>\n<li>How the data is retrieved if the service is discontinued</li></ul></p>\n\n<p><strong>How well do you think the contract or service terms include legal protections?</strong></p>',
    'Reference': '<p>Talk to your legal department about your agency\'s requirements.</p>',
    'Condition': '',
    'Relationship': '',
    'Value_type': 'Integer',
    'Value_options': '1, 2, 3, 4, 5',
    'Required_or_default_value': 2,
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  },
  {
    'Category': 'Commercials',
    'Sub_category': '',
    'Quality': 'Content ownership',
    'Description': '<p>It is important that your content ownership is not surrendered or changed by using the cloud service.</p>\n\n<p>This includes the sharing of data with third parties.</p>\n\n<p><strong>Will the content remain the sole property of your agency?</strong></p>',
    'Reference': '<p>If content ownership rights aren\'t clear, contact the vendor and ask for them to provide this information.</p>',
    'Condition': '',
    'Relationship': '',
    'Value_type': 'Integer',
    'Value_options': '1, 2, 3, 4, 5',
    'Required_or_default_value': 5,
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': 'I think this could be a Yes/No "Does all content remain the property of your organisation?'
  },
  {
    'Category': 'Commercials',
    'Sub_category': '',
    'Quality': 'Exit provisions',
    'Description': '<p>You should understand the exit conditions of any contract you sign. </p>\n<p>You should consider things like:</p>\n<p><ul><li>Costs for early exit</li>\n<li>Restrictions for exporting the data</li>\n</ul></p>\n\n<p><strong>How well do you think the contract states the exit conditions?</strong></p>',
    'Reference': '<p>If exit provisions aren\'t clear, contact the vendor and ask them to provide this information.</p>\n<p>You could ask your legal department for help.</p>',
    'Condition': '',
    'Relationship': 'Operability - Portability (vendor lock-in)',
    'Value_type': 'Integer',
    'Value_options': '1, 2, 3, 4, 5',
    'Required_or_default_value': 3,
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  },
  {
    'Category': 'Compliance',
    'Sub_category': 'Laws & regulations',
    'Quality': 'Australian Privacy Principles',
    'Description': '<p>Government agencies are required to ensure contracted service providers do not breach the Australian Privacy Principles (APP). Agencies must ensure that personal information will be protected. The cloud service provider must state in the contract that they will comply with the APPs.</p>\n<p>If a data breach occurs, the service provider is obligated to report the breach.</p>\n\n<p><strong>How well do you think service complies with the Australian Privacy Principles?</strong></p>',
    'Reference': '<p>Learn more about the <a href="https://www.oaic.gov.au/privacy-law/privacy-act/australian-privacy-principles" target="_blank">Australian Privacy Principles</a>.</p>\n<p>Learn more about the <a href="https://www.oaic.gov.au/privacy-law/privacy-act/notifiable-data-breaches-scheme" target="_blank">Notifiable Data Breaches scheme</a>.</p>',
    'Condition': '',
    'Relationship': 'Commercials - APPs compliance',
    'Value_type': 'Integer',
    'Value_options': '1, 2, 3, 4, 5',
    'Required_or_default_value': 5,
    'Required_value_rationale': 'Mandatory',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  },
  {
    'Category': 'Compliance',
    'Sub_category': 'Laws & regulations',
    'Quality': 'Archives Act',
    'Description': '<p>Government agencies are required to ensure all information complies with the <em>Archives Act 1983</em>.</p>\n<p>You should consider:</p>\n<p><ul><li>If the service complies with the act</li>\n<li>If you need internal measures to ensure compliance</li></ul><p>\n\n<p><strong>How well do you think the service complies with the requirements of the <em>Archives Act 1983</em>?</strong></p>',
    'Reference': '<p>Learn more about the <a href="https://www.legislation.gov.au/Details/C2016C00772" target="_blank">Archives Act</a>.</p>',
    'Condition': '',
    'Relationship': '',
    'Value_type': 'Integer',
    'Value_options': '1, 2, 3, 4, 5',
    'Required_or_default_value': 4,
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  },
  {
    'Category': 'Compliance',
    'Sub_category': 'Laws & regulations',
    'Quality': 'Freedom of Information Act',
    'Description': '<p>As part of the <em>Freedom of Information Act 1982</em>, individuals have the right to request access to documents from Australian Government.</p>\n<p>You should consider:</p>\n<p><ul><li>If the service complies with the act</li>\n<li>If you need internal measures to ensure compliance</li></ul>\n\n<p><strong>How well do you think the service complies with the requirements of the <em>Freedom of Information Act 1982</em>?</strong></p>',
    'Reference': '<p>Learn more about the <a href="https://www.oaic.gov.au/freedom-of-information/foi-act" target="_blank">Freedom of Information Act</a>.</p>',
    'Condition': '',
    'Relationship': '',
    'Value_type': 'Integer',
    'Value_options': '1, 2, 3, 4, 5',
    'Required_or_default_value': 4,
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': 'This should be a yes/No "Does the service comply with the Freedom of Information act?'
  },
  {
    'Category': 'Compliance',
    'Sub_category': 'Laws & regulations',
    'Quality': 'GDPR',
    'Description': '<p>Australian agencies may need to comply with the GDPR if they:</p>\n<p>\n<ul><li>Have an establishment in the European Union (EU)</li>\n<li>Offer goods and services in the EU</li>\n<li>Monitor the behaviour of individuals in the EU.</li></ul></p>\n\n<p><strong>How well do you think the service complies with the requirements of the EU General Data Protection Regulation?</strong></p>',
    'Reference': '<p>Learn more about the GDPR at the <a href="https://ec.europa.eu/commission/priorities/justice-and-fundamental-rights/data-protection/2018-reform-eu-data-protection-rules_en" target="_blank">European Commission website</a>.</p>\n<p>To understand how the GDPR applies to Australian Government Agencies you can visit the <a href="https://www.oaic.gov.au/agencies-and-organisations/faqs-for-agencies-orgs/government-agencies/does-the-eu-general-data-protection-regulation-gdpr-apply-to-australian-government-agencies" target="_blank">Office of the Australian Information Commissioner</a>.</p>',
    'Condition': '',
    'Relationship': '',
    'Value_type': 'Integer',
    'Value_options': '1, 2, 3, 4, 5',
    'Required_or_default_value': 1,
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  },
  {
    'Category': 'Compliance',
    'Sub_category': 'Certifications, accreditations & standards',
    'Quality': 'ASD certification (CCSL)',
    'Description': '<p>Some cloud services have been awarded Australian Signals Directorate (ASD) Certification and are on the Certified Cloud Services List (CCSL).</p>\n\n<p>If the service is on the list, you should:</p>\n<p><ul><li>Request a copy of the ASD Certification Letter</li>\n<li>Request a copy of the Certification Report</li>\n<li>Consider ASD’s advice on the certification.</li></p>\n\n<p><strong>Select the level at which the service is certified by the Australian Signals Directorate.</strong></p>',
    'Reference': '<p>Learn more about <a href="https://acsc.gov.au/infosec/irap/certified_clouds.htm" target="_blank">ASD Certification and the Certified Cloud Services List.</a> </p>\n<p>Please note the following:\n<ul><li>A certified cloud service may need to be configured correctly in order to be compliant</li>\n<li>You may also need to undertake internal measures to ensure compliance</li>\n<li>ASD certification is not mandatory for a cloud service.</li></ul></p>',
    'Condition': '',
    'Relationship': '',
    'Value_type': 'XOR',
    'Value_options': 'Not certified, Certified for Unclassified: DLM, Certified for Protected',
    'Required_or_default_value': '',
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  },
  {
    'Category': 'Compliance',
    'Sub_category': 'Certifications, accreditations & standards',
    'Quality': 'IRAP assessment',
    'Description': '<p>Some cloud providers might have undertaken an IRAP assessment.</p>\n<p>You should request the results of any IRAP assessment from the cloud service provider directly.</p>\n<p><strong>Was the service assessed by an Information Security Registered Assessors Program assessor?</strong></p>',
    'Reference': '<p>Learn more about <a href="https://acsc.gov.au/infosec/irap.htm" target="_blank">IRAP</a>.</p>\n\n<p>Contact the vendor to find out if they have undertaken an IRAP assessment. If they have, you should review the outcome.</p>\n\n<p>You can also perform your own IRAP assessment. Find out more at the <a href="https://acsc.gov.au/infosec/irap.htm" target="_blank">Australian Cyber Security Centre</a>.</p>',
    'Condition': 'asd_certified === \'n/a\' ||\nasd_certified === \'no\' ||\nasd_certified === \'unsure\'',
    'Relationship': '',
    'Value_type': 'XOR',
    'Value_options': 'Yes,No',
    'Required_or_default_value': '',
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  },
  {
    'Category': 'Compliance',
    'Sub_category': 'Certifications, accreditations & standards',
    'Quality': 'ISM alignment',
    'Description': '<p>Government agencies are required to use the Australian Government Information Security Manual (ISM) as the standard for security of government ICT systems.</p>\n\n<p>The ISM is a risk-based framework that can help assess the security of a cloud service.</p>\n\n<p><strong>Does the service align with the Australian Government Information Security Manual?</strong></p>',
    'Reference': '<p>Learn more about the <a href="https://acsc.gov.au/infosec/ism/" target="_blank">Australian Government Information Security Manual</a>.</p>',
    'Condition': 'irap_assessed === \'n/a\' ||\nirap_assessed === \'no\' ||\nirap_assessed === \'unsure\'',
    'Relationship': 'Compliance - ASD/IRAP certification',
    'Value_type': 'XOR',
    'Value_options': 'Yes,No',
    'Required_or_default_value': 'No',
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  },
  {
    'Category': 'Compliance',
    'Sub_category': 'Certifications, accreditations & standards',
    'Quality': 'WCAG compliance',
    'Description': '<p>Government agencies are required to ensure information and services comply with the Web Content Accessibility Guidelines.</p>\n\n<p>This ensures that services are provided in a non-discriminatory accessible manner.</p>\n\n<p><strong>How well do you think the service complies with the Web Content Accessibility Guidelines?</strong></p>',
    'Reference': '<p>Learn more about <a href="https://www.australia.gov.au/accessibility" target="_blank">accessibility</a> and <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">Web Content Accessibility Guidelines</a>.</p>',
    'Condition': 'cloud_model !== \'Software as a service (SaaS)\'',
    'Relationship': '',
    'Value_type': 'Integer',
    'Value_options': '1, 2, 3, 4, 5',
    'Required_or_default_value': 3,
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': 'This should be a yes/no "Does the service comply with the Web Content Accessibility guidelines?'
  },
  {
    'Category': 'Compliance',
    'Sub_category': 'Certifications, accreditations & standards',
    'Quality': 'PCI DSS compliance',
    'Description': '<p>The Payment Card Industry Data Security Standard (PCI DSS) is designed to ensure that all companies that use credit card information maintain a secure environment.</p>\n\n<p><strong>How well do you think the service complies with the requirements of the PCI DSS?</strong></p>',
    'Reference': '<p>Learn more about <a href="https://www.pcicomplianceguide.org/faq/" target="_blank">PCI DSS</a>.</p>',
    'Condition': 'cloud_model !== \'Software as a service (SaaS)\'',
    'Relationship': '',
    'Value_type': 'Integer',
    'Value_options': '1, 2, 3, 4, 5',
    'Required_or_default_value': 3,
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  },
  {
    'Category': 'Compliance',
    'Sub_category': '',
    'Quality': 'Data sovereignty',
    'Description': '<p>Government agencies can store and/or process personal information overseas; however, they must comply with the Australian Privacy Principles.</p>\n\n<p>This applies to both live data and backed up data.</p>\n\n<p><strong>How well do you think the service provides data storage that complies with the Australian Privacy Principles? </strong></p>',
    'Reference': '<p>Learn more about <a href="https://www.oaic.gov.au/agencies-and-organisations/agency-resources/privacy-agency-resource-4-sending-personal-information-overseas" target="_blank">sending personal information overseas</a>.</p>',
    'Condition': '',
    'Relationship': '',
    'Value_type': 'Integer',
    'Value_options': '1, 2, 3, 4, 5',
    'Required_or_default_value': 3,
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': 'This should be a yes/no " Is data guaranteed to reside within Australia exclusively?'
  },
  {
    'Category': 'Security',
    'Sub_category': '',
    'Quality': 'Encryption',
    'Description': '<p>It is important for any data to be properly encrypted both in transit and at rest.</p>\n<p>You should consider:</p>\n<p><ul><li>Protocols</li>\n<li>Type of encryption</li>\n<li>Algorithms</li> \n<li>End-to-end encryption</li>\n<li>Key length</li>\n<li>Key storage</li></ul></p>\n\n<p><strong>How well do you think the data is encrypted?</strong></p>',
    'Reference': '<p>If the approach to data encryption isn\'t clear, contact the vendor and ask for them to provide this information.</p>\n<p>You may need the help from a security specialist to properly assess this quality.</p>\n<p>Learn more about encryption at the \n<a href="https://www.owasp.org/index.php/Guide_to_Cryptography"target="_blank">Guide to Cryptology</a> and the <a href="https://www.owasp.org/index.php/Cryptographic_Storage_Cheat_Sheet#Secure_Cryptographic_Storage_Design"target="_blank">Cryptographic Storage Cheat Sheet</a> by the OWASP Foundation.</p>',
    'Condition': '',
    'Relationship': '',
    'Value_type': 'Integer',
    'Value_options': '1, 2, 3, 4, 5',
    'Required_or_default_value': 3,
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  },
  {
    'Category': 'Security',
    'Sub_category': '',
    'Quality': 'Logging & audit',
    'Description': '<p>It is important that the services provides auditable logs of all activities.</p><p><strong>How well do you think the service provides logs that can be audited?</strong></p>',
    'Reference': '<p>If the approach to logging isn\'t clear, contact the vendor and ask for them to provide this information.</p>',
    'Condition': '',
    'Relationship': '',
    'Value_type': 'Integer',
    'Value_options': '1, 2, 3, 4, 5',
    'Required_or_default_value': 4,
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  },
  {
    'Category': 'Operability',
    'Sub_category': 'Performance',
    'Quality': 'Connectivity',
    'Description': '<p>It is important that the service can be easily connected to.</p>\n<p>You should consider:</p>\n<p><ul><li>If the service provides local endpoints</li>\n<li>If service provides global endpoints</li>\n<li>If there are options for how you connect (eg. Software or hardware VPN, dedicated lines)</li></ul></p>\n<p><strong>How well do you think the service can easily be connected to?</strong></p>',
    'Reference': '<p>If the approach to connectivity isn\'t clear, contact the vendor and ask them to provide this information.</p>',
    'Condition': '',
    'Relationship': 'Vendor - Local presence, Vendor - Global presence',
    'Value_type': 'Integer',
    'Value_options': '1, 2, 3, 4, 5',
    'Required_or_default_value': 3,
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  },
  {
    'Category': 'Operability',
    'Sub_category': '',
    'Quality': 'Maturity',
    'Description': '<p>Knowing the maturity of a service can help assess risk. This may provide assurance to the quality of the service being provided; however you should note that lack of maturity doesn\'t imply a lower quality of service.</p> \n\n<p>You should consider:</p>\n<p><ul><li>How long they have been in operation</li>\n<li>How established they are in the market</li></ul></p>\n\n<p><strong>How do you think the service rates in terms of maturity?</strong></p>',
    'Reference': '<p>Contact the vendor and ask them to provide this information.</p>',
    'Condition': '',
    'Relationship': 'Vendor - Experience / maturity',
    'Value_type': 'Integer',
    'Value_options': '1, 2, 3, 4, 5',
    'Required_or_default_value': 3,
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  },
  {
    'Category': 'Operability',
    'Sub_category': '',
    'Quality': 'Orchestration and automation',
    'Description': '<p>Consider whether the service allows for automation. This may include automated deployments of instances, applications or data.</p>\n<p><strong>How well do you think processes can be automated?</strong></p>',
    'Reference': '<p>Contact the vendor and ask them to provide this information.</p>',
    'Condition': '',
    'Relationship': '',
    'Value_type': 'Integer',
    'Value_options': '1, 2, 3, 4, 5',
    'Required_or_default_value': 0,
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  },
  {
    'Category': 'Support',
    'Sub_category': '',
    'Quality': 'Resources',
    'Description': '<p>Support resources can help with implementation and ongoing use of the service.</p>\n<p>Resources may include:</p>\n<p><ul><li>Online resources</li>\n<li>Training</li>\n<li>Technical experts</li>\n<li>An online community of users and developers.</li> </ul></p>\n\n<p><strong>How well do you think the service is supported with resources?</strong></p>',
    'Reference': '<p>Try searching online for resources and support. Community forums can also be a useful tool.</p>',
    'Condition': '',
    'Relationship': '',
    'Value_type': 'Integer',
    'Value_options': '1, 2, 3, 4, 5',
    'Required_or_default_value': 4,
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  },
  {
    'Category': 'Support',
    'Sub_category': '',
    'Quality': 'Customer support accessibility',
    'Description': '<p>It is important that you can access customer support for the service.</p>\n\n<p>You should consider if this is required for: </p>\n<p><ul><li>Users</li>\n<li>Administrators</li>\n<li>Developers</li>\n<li>Security personnel</li></ul></p>\n<p><strong>How well do you think the service provides customer support?</strong></p>',
    'Reference': '<p>Contact the vendor and ask them to provide this information.</p>',
    'Condition': '',
    'Relationship': '',
    'Value_type': 'Integer',
    'Value_options': '1, 2, 3, 4, 5',
    'Required_or_default_value': 3,
    'Required_value_rationale': '',
    'Assessment_value': '',
    'Assessment_value_rationale': '',
    'Jess\' notes': ''
  }
];
