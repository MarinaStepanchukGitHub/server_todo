import { STATUS } from "../types";

export class UpdateTodoDto {
    title: string;
    description: string | null;
    status: STATUS;
    isFavorite: boolean;
}