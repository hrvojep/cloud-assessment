import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsComponent } from './questions.component';
import {FormsModule} from "@angular/forms";
import {ProgressBarComponent} from "../../components/progress-bar/progress-bar.component";
import {QuestionDirectionButtonComponent} from "../../components/question-direction-button/question-direction-button.component";
import {HelpSectionComponent} from "../../components/help-section/help-section.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {RouterTestingModule} from "@angular/router/testing";
import {WorkFlowService} from "../../services/work-flow.service";
import {LocalStorageService} from "../../services/local-storage.service";
import {SubmitServiceService} from "../../services/submit-service.service";
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('QuestionsComponent', () => {
  let component: QuestionsComponent;
  let fixture: ComponentFixture<QuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuestionsComponent,
        ProgressBarComponent,
        QuestionDirectionButtonComponent,
        HelpSectionComponent,
        ModalComponent
      ],
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      providers: [
        WorkFlowService,
        SubmitServiceService,
        LocalStorageService,
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
