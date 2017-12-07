import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {
    JhipsterTasksDemoSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        JhipsterTasksDemoSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title
    ],
    exports: [
        JhipsterTasksDemoSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class JhipsterTasksDemoSharedCommonModule {}
