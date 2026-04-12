import {ApiResource} from './api-resource.model';

export interface NamedApiResource extends ApiResource {
    name: string;
}
