export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: IAddress;
	phone: string;
	website: string;
    company:  ICompany;
}
export interface IAddress {
	lat: string;
	lng: string;
}
export interface ICompany {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: IGeo;
}
export interface IGeo {
	name: string;
	catchPhrase: string;
	bs: string;
}