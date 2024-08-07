export interface Company {
  id: string; // Identificador único para cada empresa
  name: string;
  category: string;
  card?: string; // Propiedad opcional para la tarjeta de presentación
  splashScreen?: string; // Propiedad opcional para la pantalla de inicio
  landingPage?: string; // Propiedad opcional para la plantilla de página de aterrizaje
}
