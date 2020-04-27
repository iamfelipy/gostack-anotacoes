
interface techObject {
    title: string;
    experience: number;
}

interface CreateUserData {
    name?: String;
    email: String;
    // email: String | boolean;
    password: String;
    techs: Array<string | techObject>;
    // techs: string[];
}

// export default function createUser(name: string = '', email: string, password: string){
export default function createUser({name, email, password, techs}: CreateUserData){
    const users = {
        name,
        email, 
        password,
        techs
    }
    return users;
}