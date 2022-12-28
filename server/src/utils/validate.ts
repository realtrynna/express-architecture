import { validate } from "class-validator";

export const validateDtos = async (...dtos: Object[]) => {
    for (const dto of dtos) {
        const errors = await validate(dto);

        if (errors.length > 0) errors.map(error => error.constraints);
    }
}