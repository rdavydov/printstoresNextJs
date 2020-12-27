import "reflect-metadata";

export const metadataKey = Symbol("Prefix");

export function Prefix(prefix: string) {
  return (target: Function) => {
    Reflect.defineMetadata(metadataKey, prefix, target.prototype);
  };
}
