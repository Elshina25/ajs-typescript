export default interface Buyable {
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly year?: number,
    readonly country?: string,
    readonly tagline?: string,
    readonly genre?: string[],
    readonly time?: string,
    readonly author?: string,
    readonly pages?: number
}