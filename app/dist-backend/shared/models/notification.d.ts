export declare enum NotificationType {
    TEXT = "text"
}
export interface INotification {
    id: string;
    content: string;
    type: NotificationType;
    createdAt: string;
    isSeen: boolean;
}
