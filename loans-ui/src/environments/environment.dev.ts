export const environment = {
    production: false,
    CUSTOMER_BASE_URL: 'http://localhost:3000/customer/',
    CUSTOMER: {
        ADD_CUSTOMER: 'add',
        GET_ALL_CUSTOMERS: 'list',
        GET_CUSTOMERS: 'get',
        UPDATE_CUSTOMER: 'update',
        DELETE_CUSTOMERS: 'delete',
        SEARCH_CUSTOMERS: 'search',
    },
    LOAN_BASE_URL: 'http://localhost:3000/loan/',
    LOAN: {
        APPLY_LOAN: 'applyloan',
        GET_ALL_LOANS: 'list',
        GET_LOANS: 'get',
        EDIT_LOANS: 'edit',
        DELETE_LOANS: 'delete',
        SEARCH_LOANS: 'search',
    }
}