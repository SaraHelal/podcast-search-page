export function TimeMillisToMins(millis : number): string {
  const hours = Math.floor(millis / 3600000); 
  const minutes = Math.floor((millis % 3600000) / 60000);
  const seconds = Math.floor((millis % 60000) / 1000);

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  else if(minutes > 0){
    return `${minutes}m`;
  }
  return `${seconds}m `;
}