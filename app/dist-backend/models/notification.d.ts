import { INotification } from '../shared/models/notification';
export declare const getNotifications: (sessionId: string) => Promise<INotification[]>;
export declare const markNotificationsAsSeen: (sessionId: string) => Promise<void>;
