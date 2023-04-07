export  const formatDate=(currentDate)=>{ 
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date=new Date(currentDate)
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    // Format the date string
    const formattedDate = `${day} ${month} ${year}`;
    return formattedDate
}