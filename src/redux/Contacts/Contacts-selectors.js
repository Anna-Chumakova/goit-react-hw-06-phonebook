export const getContacts = store => store;
export const getFilteredContacts = (store) => {  
    
    
    console.log(store);
    if (!store.filter) {
        return store.contacts;
    }

    const normalizedFilter = store.filter.toLocaleLowerCase();
    const filteredContacts = store.contacts.filter(({name, number}) => {
        const normalizedName = name.toLocaleLowerCase();
        const normalizedNumber = number.toLocaleLowerCase();
        const result = normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter);
        return result;
    })
    console.log(filteredContacts);
    return filteredContacts;
}