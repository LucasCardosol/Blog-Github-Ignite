import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formatDateDistance = (dateString:string) => {
  if(dateString){
    const parsedDate = new Date(dateString);
    const distanceString = formatDistanceToNow(parsedDate, { addSuffix: true, locale: ptBR });
    return distanceString;
  }else{
    return ""
  }
  
};
