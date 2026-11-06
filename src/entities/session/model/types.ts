export type UserRole = "owner" | "user";

export type Session = {
  id: string;
  userId: string;
  ownerId?: string;
  name: string;
  email: string;
  role: UserRole;
};

// export type AuthSession = {
//   accessToken: string;
//   user: Session;
// };

export type SignInCredentials = {
  email: string;
  password: string;
};

// export type ClientRegistration = SignInCredentials & {
//   role: "user";
//   name: string;
//   lastname: string;
//   tel: string;
// };

// export type OwnerRegistration = SignInCredentials & {
//   role: "owner";
//   name: string;
//   lastname: string;
//   tel: string;
//   companyName: string;
//   companyTaxOrRegistrationNumber: string;
//   type: "OOO" | "IP" | "AO";
//   address: string;
//   count: number;
// };

// export type RegistrationData = ClientRegistration | OwnerRegistration;