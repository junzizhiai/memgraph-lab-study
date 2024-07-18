import { ResponseEmpty, ResponseMultiple } from './common';
import { INotification } from '../models/notification';
export declare type GetNotificationsResponse = ResponseMultiple<INotification>;
export declare type PostSeenNotificationsResponse = ResponseEmpty;
