/**
 * The interface for creating a class with custom serialization. When the object is called within JSON.stringify, this function will be called, and the return value will be used to serialize instead.
 * @interface JSS.lang.ISerialization
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
 */
interface ISerializable {
    /**
     * Return a serialized version of this object. Replace return type with the intended type.
     * @return {ThisType<any>} A serialized version of this object.
     * @throws {ObjectSerializableFailedException} When an object has the interface ISerializable but failed to execute when called.
     */
    toJSON(): ThisType<any>;
}
export type { ISerializable };
