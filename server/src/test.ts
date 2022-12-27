type TObjectType = Record<any, string> | undefined;

class HttpError extends Error {
    status: number;

    objects: TObjectType[] | undefined;

    constructor(status: number, message: string, objects?: TObjectType[]) {
        super(message);

        const { name, prototype } = new.target;

        Object.setPrototypeOf(this, prototype);

        this.name = name;
        this.status = status;
        this.objects = objects;
    }
}

export class BadReqError extends HttpError {
    constructor(message?: string, object?: TObjectType[]) {
        super(400, message!, object);

        const { name, prototype } = new.target;

        Object.setPrototypeOf(this, prototype);

        this.name = name;
        
    }
}

const result = new BadReqError("here");

console.log(result.status);