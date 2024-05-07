import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail({}, {message: "Email invalido"})
    Email: string;
    @MinLength(5, {message: "El nombre debe tener al menos 5 caracteres"})
    @MaxLength(15, {message: "El nombre no puede tener mas de 15 caracteres"})
    FirstName: string;
    @IsNotEmpty({message: "El apellido no puede estar vacio"})
    LastName: string;
    @IsNotEmpty({message: "El numero de telefono no puede estar vacio"})
    PhoneNumber: string;
    @IsNotEmpty({message: "La direccion no puede estar vacia"})
    Address: string;
    
}
