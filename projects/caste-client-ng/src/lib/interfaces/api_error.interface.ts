export interface ApiError {
  detail: string;
  status: number;
  title: string;
  type: string;
  violations: Violation[];
}

export interface Violation {
  propertyPath: string;
  message: string;
}
