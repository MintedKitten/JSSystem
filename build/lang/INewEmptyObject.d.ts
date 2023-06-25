/**
 * The interface for creating a class with function newEmptyObject. The object is the instnace of a class with value of 0 input.
 */
interface INewEmptyObject {
    /**
     * Create a new 'Empty' object of this class.
     */
    newEmptyObject(): ThisType<this>;
}
export type { INewEmptyObject };
