export interface UserAccount {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface UserAccountsState {
  accounts: UserAccount[];
  loading: boolean;
  error: string | null;
}
