import { DeleteIndexRequestQuery, PostIndexRequest } from '../shared/api/indexes';
export declare class CreateIndexDto implements PostIndexRequest {
    label: string;
    property?: string;
}
export declare class RemoveIndexDto extends CreateIndexDto implements DeleteIndexRequestQuery {
}
