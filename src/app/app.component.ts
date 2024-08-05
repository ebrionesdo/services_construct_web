import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  @ViewChild('scrollMe') private scrollContainer!: ElementRef;

  title = 'services-construct';
  protected banner = "";
  protected servicios:any[] = [];
  protected proyectos:any[] = [];

  protected correo = 'maximoedu_69@hotmail.com';
  protected linkWhatsapp = 'https://wa.me/0992746878';

  ngOnInit(): void {
      this.banner = "./assets/estructuras.jpg";
      this.servicios = [...serviciosData];
      this.proyectos = [...proyectosData];
  }

  onScrollTop() {
    this.scrollContainer.nativeElement.scrollTo({
      top: 0,
      behavior: 'smooth' // Hace que el scroll sea suave y lento
    });
  }


}


const serviciosData = [
  {
    titulo:'Diseño y Planificación',
    items:[
      {subtitulo:'Diseño estructural', desc:'Diseño de estructuras como edificios, puentes, presas, y otras infraestructuras.'},
      {subtitulo:'Planificación urbana y regional', desc:'Desarrollo de planes para el uso eficiente del suelo y el crecimiento urbano.'},
      {subtitulo:'Diseño de carreteras y autopistas', desc:'Planificación y diseño de sistemas de transporte, incluyendo carreteras, autopistas y ferrocarriles.'},
      {subtitulo:'Diseño de sistemas hidráulicos', desc:'Diseño de sistemas de suministro de agua, alcantarillado, y gestión de aguas pluviales.'},
    ],
    imagen:'./assets/Design_construct.jpg'
  },
  {
    titulo:'Consultoría y Asesoría',
    items:[
      {subtitulo:'Consultoría técnica', desc:'Asesoramiento en temas técnicos relacionados con proyectos de construcción e infraestructura.'},
      {subtitulo:'Gestión de proyectos', desc:'Coordinación y supervisión de proyectos desde la concepción hasta la finalización.'},
      {subtitulo:'Estudios de viabilidad', desc:'Evaluación de la viabilidad técnica y económica de proyectos potenciales.'},
      {subtitulo:'Asesoría en normativas y regulaciones', desc:'Asistencia en el cumplimiento de las normativas y regulaciones locales y nacionales.'},
    ],
    imagen:'./assets/Consultoria_Asesoria.jpg'
  },
  {
    titulo:'Construcción y Supervisión',
    items:[
      {subtitulo:'Supervisión de obra', desc:'Monitoreo y control de la ejecución de obras para asegurar el cumplimiento de los planos y especificaciones.'},
      {subtitulo:'Gestión de la construcción', desc:'Planificación, coordinación y control de los recursos para llevar a cabo el proyecto de construcción.'},
      {subtitulo:'Control de calidad', desc:'Aseguramiento de la calidad en los materiales y procesos de construcción.'},
    ],
    imagen:'./assets/Construccion_Supervision.jpg'
  },
  {
    titulo:'Estudios y Análisis',
    items:[
      {subtitulo:'Estudios geotécnicos', desc:'Análisis del suelo y las condiciones geológicas para la construcción.'},
      {subtitulo:'Análisis estructural', desc:'Evaluación de la integridad y capacidad de carga de estructuras existentes y nuevas'},
      {subtitulo:'Estudios ambientales', desc:'Evaluación del impacto ambiental de proyectos de construcción e infraestructura.'},
    ],
    imagen:'./assets/Estudio_Analisis.jpg'
  },
  {
    titulo:'Infraestructura de Transporte',
    items:[
      {subtitulo:'Diseño de puentes y túneles', desc:'Desarrollo de proyectos de infraestructura para el transporte sobre y bajo tierra.'},
      {subtitulo:'Diseño de aeropuertos', desc:'Planificación y diseño de instalaciones aeroportuarias.'},
      {subtitulo:'Diseño de puertos y marinas', desc:'Diseño de instalaciones para el transporte marítimo y recreativo.'},
    ],
    imagen:'./assets/Infraestructura_Transporte.jpg'
  },
  {
    titulo:'Sistemas de Servicios Públicos',
    items:[
      {subtitulo:'Diseño de redes de suministro de agua', desc:'Planificación y diseño de sistemas de distribución de agua potable.'},
      {subtitulo:'Diseño de sistemas de alcantarillado', desc:'Desarrollo de infraestructuras para el manejo de aguas residuales.'},
      {subtitulo:'Diseño de redes de energía', desc:'Planificación de sistemas de distribución de electricidad y gas.'},
    ],
    imagen:'./assets/Alcantarillado.jpg'
  },
  {
    titulo:'Rehabilitación y Mantenimiento',
    items:[
      {subtitulo:'Rehabilitación de estructuras', desc:'Evaluación y refuerzo de estructuras existentes para prolongar su vida útil.'},
      {subtitulo:'Mantenimiento de infraestructuras', desc:'Planificación y ejecución de programas de mantenimiento para infraestructuras públicas y privadas.'},
    ],
    imagen:'./assets/Mantenimiento.jpg'
  },
  {
    titulo:'Innovación y Sostenibilidad',
    items:[
      {subtitulo:'Implementación de tecnologías verdes', desc:'Incorporación de tecnologías sostenibles en proyectos de construcción e infraestructura.'},
      {subtitulo:'Diseño de edificios sostenibles', desc:'Creación de estructuras que minimicen el impacto ambiental y maximicen la eficiencia energética.'},
    ],
    imagen:'./assets/Innovacion.jpg'
  },
]

const proyectosData = [
  {
    titulo:'Diseño y Planificación',
    imagen:'./assets/architecture-puente.jpg'
  },
  {
    titulo:'Consultoría y Asesoría',

    imagen:'./assets/south-africa-via.jpg'
  },
  {
    titulo:'Construcción y Supervisión',
    imagen:'./assets/hamburg-puiente.jpg'
  },
  {
    titulo:'Estudios y Análisis',
    imagen:'./assets/zhuhai-via.jpg'
  },
  {
    titulo:'Infraestructura de Transporte',
    imagen:'./assets/architecture-puente.jpg'
  },
  {
    titulo:'Sistemas de Servicios Públicos',
    imagen:'./assets/zhuhai-via.jpg'
  },
  {
    titulo:'Rehabilitación y Mantenimiento',
    imagen:'./assets/hamburg-puiente.jpg'
  },
  {
    titulo:'Innovación y Sostenibilidad',
    imagen:'./assets/architecture-puente.jpg'
  },
]
