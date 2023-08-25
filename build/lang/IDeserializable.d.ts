/**
 * The interface for creating a class with custom deserialization. When the serialized string is passed into the function, a
 * @interface JSS.lang.IDeserializable
 */
interface IDeserializable {
    /**
     * Static Implement Compatibility
     * @see Static_Implements
     */
    new (...args: any[]): any;
    /**
     * Create a new 'Empty' object of this class. No parameter. Replace return type with class.
     * @return {ThisType<this>} An 'Empty' object of this class.
     * @throws {ObjectDeserializableFailedException} When an object has the interface IDeserializable but failed to execute when called.
     */
    fromJSON(json: string): ThisType<this>;
}
export type { IDeserializable };
