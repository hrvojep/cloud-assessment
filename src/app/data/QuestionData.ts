import QuestionItem from '../classes/QuestionItem';

export const QuestionData: QuestionItem[] = [
    {
        id: 1,
        category: 'General_1',
        subCategory: '',
        quality: 'Cloud model',
        description: 'Cloud model being required or assessed',
        reference: 'https://www.quora.com/What-is-the-difference-between-IaaS-SaaS-and-Paas',
        condition: '',
        relationship: '',
        valueType: 'List',
        defaultValue: 'Unsure',
        requiredValueRationale: '',
        assessmentValue: '',
        assessmentValueRationale: '',
        options: ['IaaS', 'PaaS', 'Saas']
    },
    {
        id: 2,
        category: 'Vendor_2',
        subCategory: '',
        quality: 'Business & financial health',
        description: 'Degree to which the vendor is deemed to be in a healthy business and financial situation',
        // tslint:disable-next-line:max-line-length
        reference: 'Example: Does the vendor have a track record of stability and is in a healthy financial position with sufficient capital to operate successfully over the long term?',
        condition: 'a',
        relationship: '',
        valueType: 'Integer',
        defaultValue: 4,
        requiredValueRationale: '',
        assessmentValue: '',
        assessmentValueRationale: ''
    },
    {
        id: 3,
        category: 'Vendor_3',
        subCategory: '',
        quality: 'Experience / maturity',
        description: 'Degree to which the vendor is deemed experienced and mature',
        reference: 'Note that there is another quality for service maturity.\nHow long has the vendor been in existence? Startup?',
        condition: '',
        relationship: 'Operability - Maturity',
        valueType: 'Integer',
        defaultValue: 4,
        requiredValueRationale: '',
        assessmentValue: '',
        assessmentValueRationale: ''
    },
    {
        id: 4,
        category: 'Vendor_4',
        subCategory: '',
        quality: 'Reputation',
        description: 'Degree to which the vendor is deemed reputable',
        reference: 'Examples:\n- Any past legal issues?\n- Has been, or is being sued?\n- Like-minded?',
        condition: 'a',
        relationship: '',
        valueType: 'Integer',
        defaultValue: 4,
        requiredValueRationale: '',
        assessmentValue: '',
        assessmentValueRationale: ''
    },
    {
        id: 5,
        category: 'Vendor_5',
        subCategory: '',
        quality: 'Adoption',
        description: 'Degree to which the vendor\'s services are already used, both on the market and within government agencies',
        reference: '',
        condition: '',
        relationship: '',
        valueType: 'Integer',
        defaultValue: 2,
        requiredValueRationale: '',
        assessmentValue: '',
        assessmentValueRationale: ''
    },
    {
        id: 6,
        category: 'Vendor_6',
        subCategory: '',
        quality: 'Roadmap alignement',
        description: 'Degree to which the vendor\'s product roadmap aligns with your strategy',
        reference: '',
        condition: '',
        relationship: '',
        valueType: 'Integer',
        defaultValue: 1,
        requiredValueRationale: '',
        assessmentValue: '',
        assessmentValueRationale: ''
    },
    {
        id: 7,
        category: 'Commercials_7',
        subCategory: '',
        quality: 'Existing relationship',
        description: 'Degree to which a relationship with the vendor already exists',
        reference: '',
        condition: '',
        relationship: '',
        valueType: 'Integer',
        defaultValue: 1,
        requiredValueRationale: '',
        assessmentValue: '',
        assessmentValueRationale: ''
    },
];
