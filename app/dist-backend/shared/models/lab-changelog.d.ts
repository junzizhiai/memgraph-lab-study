export declare enum LabChangelogTokenType {
    TEXT = "text",
    CODE = "code",
    LINK = "link"
}
interface ITokenText {
    type: LabChangelogTokenType.TEXT;
    value: string;
}
interface ITokenCode {
    type: LabChangelogTokenType.CODE;
    value: string;
}
interface ITokenLink {
    type: LabChangelogTokenType.LINK;
    value: string;
    link: string;
}
export declare type ILabChangelogToken = ITokenText | ITokenCode | ITokenLink;
export declare type ILabChangelogLine = ILabChangelogToken[];
export declare enum LabChangelogSectionType {
    NEW = "new",
    IMPROVEMENT = "improvement",
    FIX = "fix"
}
export interface ILabChangelogSection {
    type: LabChangelogSectionType;
    items: ILabChangelogLine[];
}
export interface ILabChangelogVersion {
    version: string;
    releasedAt: number | undefined;
    sections: ILabChangelogSection[];
}
export interface ILabChangelog {
    versions: ILabChangelogVersion[];
}
export {};
