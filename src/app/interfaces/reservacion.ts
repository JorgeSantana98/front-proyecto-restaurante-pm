export interface Reservacion {
    id_reservacion: number;
    id_cliente: number;
    nombre_cliente: string;
    cantidad_personas: string;
    id_mesa: number;
    fecha_hora_resevacion: string;
}