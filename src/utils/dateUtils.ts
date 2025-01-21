import {parseISO, differenceInSeconds, format} from 'date-fns';

function formatRelative(dateISO: string): string {
  const date = parseISO(dateISO);
  const now = new Date();

  const diffInSeconds = differenceInSeconds(now, date);
  if (diffInSeconds < 60) {
    return `${diffInSeconds} s`;
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} m`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} h`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} d`;
  }

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks} w`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} mo`;
  }

  return format(date, 'dd/MM/yyyy');
}

export const dateUtils = {
  formatRelative,
};
