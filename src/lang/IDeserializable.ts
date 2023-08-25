import { ObjectDeserializableFailedException } from "./ObjectNotDeserializableException";

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
   * Turn a serialized version of this object into an object of this class.
   * @param json {string} The serailized version of this object.
   * @return {ThisType<this>} A deserialized object.
   * @throws {ObjectDeserializableFailedException} When an object has the interface IDeserializable but failed to execute when called.
   */
  fromJSON(json: string): ThisType<this>;
}

export type { IDeserializable };
