import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantComponent } from './plant.component';
import { PlantService } from './plant.service';
import { of } from 'rxjs';
import { Plant } from './plant';

describe('PlantComponent', () => {
  let component: PlantComponent;
  let fixture: ComponentFixture<PlantComponent>;
  let plantService: jasmine.SpyObj<PlantService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('PlantService', ['getPlants']);

    TestBed.configureTestingModule({
      declarations: [PlantComponent],
      providers: [
        { provide: PlantService, useValue: spy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantComponent);
    component = fixture.componentInstance;
    plantService = TestBed.inject(PlantService) as jasmine.SpyObj<PlantService>;
  });

  it('Debería mostrar 3 filas en la tabla', () => {
    const mockPlants: Plant[] = [
      { id: 1, nombre_comun: 'Planta 1', nombre_cientifico: 'pante1', tipo: 'Interior', altura_maxima: 10, clima: 'Templado', sustrato_siembra: 'Tierra' },
      { id: 2, nombre_comun: 'Planta 2', nombre_cientifico: 'pante2', tipo: 'Interior', altura_maxima: 20, clima: 'Calido', sustrato_siembra: 'Tierra' },
      { id: 3, nombre_comun: 'Planta 3', nombre_cientifico: 'pante3', tipo: 'Exterior', altura_maxima: 30,  clima: 'Frio', sustrato_siembra: 'Tierra' },
    ];

    plantService.getPlants.and.returnValue(of(mockPlants));
    
    fixture.detectChanges(); 

    const tableRows = fixture.nativeElement.querySelectorAll('tr'); 
    expect(tableRows.length).toBe(4); 
  });
});