export interface AnimationTrigger {
  value: any;
  params: AnimationParams;
}

export interface AnimationParams {
  [name: string]: string | number;
}
