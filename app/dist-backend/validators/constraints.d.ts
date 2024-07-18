import { MemgraphConstraintType } from '../shared/models/memgraph-constraint';
export declare class CreateConstraintDto {
    type: MemgraphConstraintType;
    label: string;
    property?: string;
    properties?: string[];
}
