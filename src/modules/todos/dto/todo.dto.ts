import { STATUS } from "../types";

export class TodoDto {
    id: string;
    title: string;
    description: string | null;
    status: STATUS;
    isFavorite: boolean;
}