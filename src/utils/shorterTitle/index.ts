export const shorterTitle = (title:string) => title.length < 81 ? (title) : (title.substr(0, 81) + '...')