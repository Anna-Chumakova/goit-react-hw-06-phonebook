export const getContacts = store => store.contacts;
export const getFilteredContacts = ({ contacts }) => {  
    
    const { filter } = contacts;
    
    if (!filter) {
        return contacts.contacts;
    }

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.contacts.filter(({name, number}) => {
        const normalizedName = name.toLocaleLowerCase();
        const normalizedNumber = number.toLocaleLowerCase();
        const result = normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter);
        return result;
    })
    console.log(filteredContacts);
    return filteredContacts;
}