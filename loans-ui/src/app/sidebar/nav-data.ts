export const navbarData = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'loans/list-loans',
        icon: 'fal fa-home',
        label: 'loans'
    },
    {
        routeLink: 'customers/list-customers',
        icon: 'fa-solid fa-icons',
        label: 'Customers'
    },
    {
        routeLink: 'payments',
        icon: 'fal fa-chart-bar',
        label: 'Payments'
    },
    {
        routeLink: 'invoices',
        icon: 'fal fa-tags',
        label: 'Invoices'
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings'
    },
    {
        routeLink: '',
        icon: 'fal fa-cog',
        label: 'Menu with Children',
        submenuLevel1: [
            {
                routeLink: '',
                icon: 'fal fa-cog', // icon if needed
                label: 'Sub menu level 1',
            },
            {
                routeLink: '',
                icon: 'fal fa-cog', // icon if needed
                label: 'Sub menu level 1',
                submenuLevel2: [
                    {
                        routeLink: '',
                        icon: 'fal fa-cog', // icon if needed
                        label: 'Sub menu level 2',
                    }
                ]
            }
        ]
    },

];