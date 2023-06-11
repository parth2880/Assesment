import {
    Briefs,
    add_btn,
    competitors,
    help,
    overview,
    logout,
    opportunities,
    question_mark,
    saved,
    settings,
    search_btn,
    team_logo,
    people,
    Network,
    timer,
    Calender,
    up,
    down
} from '../assets'

export const sidebar_data = [
    {
        id: '1',
        title: 'Overview',
        icon: overview
    },
    {
        id: '2',
        title: 'Oppurtunities',
        icon: opportunities
    },
    {
        id: '3',
        title: 'My Competitors',
        icon: competitors
    },
    {
        id: '4',
        title: 'Briefs',
        icon: Briefs
    },
    {
        id: '5',
        title: 'Saved',
        icon: saved
    },
    {
        id: '6',
        title: 'Settings',
        icon: settings
    },
    {
        id: '7',
        title: 'Help',
        icon: help
    },
    {
        id: '8',
        title: 'Log out',
        icon: logout
    }
]

export const time_period = [
    {
        id: 30,
        period: '30 days',
        style: ''
    },
    {
        id: 90,
        period: '90 days',
        style: ''
    },
    {
        id: 6,
        period: '6 months',
        style: ''
    },
    {
        id: 12,
        period: '12 months',
        style: ''
    },
]

export const boxes_data = [
    {
        id: '12%',
        smicon: up,
        icon: Network,
        numbers: '42,34%',
        caption: 'Bounce Rate',
    },
    {
        id: '',
        icon: Calender,
        numbers: '42,34%',
        caption: 'Pages per visit',
    },
    {
        id: '2.1%',
        smicon: down,
        icon: people,
        numbers: '326.60K',
        caption: 'Total Monthly Visit',
    },
    {
        id: '2.4%',
        smicon: down,
        icon: timer,
        numbers: '00:03:27',
        caption: 'Avg. Visit Duration',
    },
]

export const Traffic_data = [
    {
        id: 1,
        titile: 'Traffic Sources',
        score: 50,
        
    },
    {
        id: 1,
        titile: 'Traffic Sources',
        score: 50,
        
    }
]