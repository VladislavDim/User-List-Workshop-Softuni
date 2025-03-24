export const getSortFunction = (key) => {
    const sortFunctions = {
      "First name": (a, b) => a.firstName.localeCompare(b.firstName),
      "Last name": (a, b) => a.lastName.localeCompare(b.lastName),
      "Phone": (a, b) => a.phoneNumber.localeCompare(b.phoneNumber),
      "Email": (a, b) => a.email.localeCompare(b.email),
      "Created": (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    };
  
    return sortFunctions[key] || null;
  };