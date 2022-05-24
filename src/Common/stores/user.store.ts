import { atom, computed } from 'nanostores';

export const userState = atom({
    name: 'Pavel',
});
export const isAuthenticatedState = atom(true);

export const userName = computed(userState, user => user.name);
