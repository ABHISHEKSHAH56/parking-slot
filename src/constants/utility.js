export  const formatDate=(date)=>{
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Get the day, month, and year components of the date
const day = date.getDate();
const month = monthNames[date.getMonth()];
const year = date.getFullYear();

// Format the date string
const formattedDate = `${day} ${month} ${year}`;
return formattedDate
}