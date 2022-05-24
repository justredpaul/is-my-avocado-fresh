import { atom, computed } from 'nanostores';

export const NotificationsState = atom([1, 2 ,3, 4, 5, 6]);
export const CountState = computed(NotificationsState, list => (list || []).length);
export const PreviewState = computed(NotificationsState, list => (list || []).slice(0, 3));
export const isNoNotifications = computed(CountState, count => count === 0);
