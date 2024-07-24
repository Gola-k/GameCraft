// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class gdCustomObjectConfiguration extends gdObjectConfiguration {
  clone(): gdUniquePtrObjectConfiguration;
  getChildObjectConfiguration(objectName: string): gdObjectConfiguration;
  getProperties(): gdMapStringPropertyDescriptor;
  updateProperty(name: string, value: string): boolean;
  getInitialInstanceProperties(instance: gdInitialInstance): gdMapStringPropertyDescriptor;
  updateInitialInstanceProperty(instance: gdInitialInstance, name: string, value: string): boolean;
  getAnimations(): gdSpriteAnimationList;
  delete(): void;
  ptr: number;
};