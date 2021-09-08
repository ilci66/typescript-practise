// now if a class uses this interface it must have this format method
export interface HasFormatter {
  format(): string;
}