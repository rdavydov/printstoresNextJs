import "reflect-metadata";

export const metadataKey = Symbol("Prefix");

export function Prefix(prefix: string): ClassDecorator {
    return (target: Function) => {
        Reflect.defineMetadata(metadataKey, prefix, target.prototype);
    };
}
