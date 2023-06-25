/**
 * The interface for creating a class with function clone. The object is the clone of the called object.
 * @interface JSS.lang.ICloneable
 */
interface ICloneable {
  /**
   * Create a new object of this class. Reference is the called object. Replace return type with class.
   * @param reference {ThisType<this>} The object to be clone from.
   * @return {ThisType<this>} A clone object of the called object.
   */
  clone(): ThisType<this>;
}

export type { ICloneable };
