class User {
  id: number;

  username: string;

  email: string;

  passwordHash: string;

  createdAt: Date;

  updatedAt: Date;

  constructor({
    id,
    username,
    email,
    passwordHash,
    createdAt,
    updatedAt,
  }: User) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.passwordHash = passwordHash;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export default User;
