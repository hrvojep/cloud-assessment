import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralQuestionComponent } from './general-question.component';
import {FormsModule} from "@angular/forms";
import {ProgressBarComponent} from "../../components/progress-bar/progress-bar.component";
import {QuestionDirectionButtonComponent} from "../../components/question-direction-button/question-direction-button.component";
import {HelpSectionComponent} from "../../components/help-section/help-section.component";
import {RouterTestingModule} from "@angular/router/testing";
import {WorkFlowService} from "../../services/work-flow.service";
import {LocalStorageService} from "../../services/local-storage.service";

describe('GeneralQuestionComponent', () => {
  let component: GeneralQuestionComponent;
  let fixture: ComponentFixture<GeneralQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GeneralQuestionComponent,
        ProgressBarComponent,
        QuestionDirectionButtonComponent,
        HelpSectionComponent,
      ],
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      providers: [
        WorkFlowService,
        LocalStorageService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
