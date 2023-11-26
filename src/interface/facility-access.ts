export interface FacilityAccess {
  id: number;
  name: string;
  email: string;
  phone: string;
  facility: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface FacilityAccessState {
  facilityAccess: FacilityAccess[];
  loading: boolean;
  error: string | null;
}
