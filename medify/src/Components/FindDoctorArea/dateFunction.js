export const printFormattedDates = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
    const formattedDates = [];
    const currentDate = new Date();
  
    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
  
      const day = days[nextDate.getDay()];
      const month = months[nextDate.getMonth()];
      const date = nextDate.getDate().toString().padStart(2, '0');
  
      const formattedDate = `${day} ${month} ${date}`;
      formattedDates.push(formattedDate);
    }
  
    return (formattedDates);
  }
  