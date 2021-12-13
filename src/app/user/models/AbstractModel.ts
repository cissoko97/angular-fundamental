export abstract class AbstractModel<T>{
  id!: T;

  public direBonjour(): T {
    return 0 as unknown as T;
  }
}
