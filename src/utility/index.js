export const getFutureDate=()=>{
    const currentDate = new Date();
    console.log(currentDate.toISOString())
    const futureDate = new Date();
    futureDate.setFullYear(currentDate.getFullYear() + 1)
    return futureDate
}