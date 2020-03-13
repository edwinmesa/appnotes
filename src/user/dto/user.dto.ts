export class CreateUserDto {
    id: number;
    readonly uuid: string;
    readonly username: string;
    readonly password: string;
    readonly fullName: string;
    readonly age: number;
    readonly email: string;
    readonly status: number;
    readonly created_at: Date
}