import IContact from "./IContact";

const latentia = 2000;

const contacts: IContact[] = [
    { Id: "1", Name: "Nomen primum"},
    { Id: "2", Name: "Nomen secundum"}
];

const getContacts = () => new Promise<IContact[]>((r) =>
    setTimeout(
        () => r(contacts), 
        latentia
    )
);

export {
    getContacts,
}