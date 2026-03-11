import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
    IgxColumnComponent,
    IgxGridToolbarActionsComponent,
    IgxGridToolbarComponent,
    IgxGridToolbarHidingComponent,
    IgxGridToolbarPinningComponent,
    IgxGridToolbarTitleComponent,
} from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxButtonDirective } from 'igniteui-angular/directives';

interface SampleRow {
    id: number;
    product: string;
    status: string;
    owner: string;
}

@Component({
    selector: 'app-root',
    imports: [
        IgxGridComponent,
        IgxColumnComponent,
        IgxGridToolbarComponent,
        IgxGridToolbarTitleComponent,
        IgxGridToolbarActionsComponent,
        IgxGridToolbarHidingComponent,
        IgxGridToolbarPinningComponent,
        IgxSelectComponent,
        IgxSelectItemComponent,
        IgxButtonDirective,
    ],
    templateUrl: './app.html',
    styleUrl: './app.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
    protected readonly rows = signal<SampleRow[]>([
        { id: 1001, product: 'Grid Toolbar', status: 'Ready', owner: 'Alex' },
        { id: 1002, product: 'Column Pinning', status: 'Review', owner: 'Sam' },
        { id: 1003, product: 'Column Hiding', status: 'Ready', owner: 'Jordan' },
        { id: 1004, product: 'Select Control', status: 'Draft', owner: 'Casey' },
        { id: 1005, product: 'Button Action', status: 'Queued', owner: 'Taylor' },
        { id: 1006, product: 'Compact Density', status: 'Ready', owner: 'Morgan' },
        { id: 1007, product: 'Static Dataset', status: 'Review', owner: 'Riley' },
        { id: 1008, product: 'Grid Styling', status: 'Draft', owner: 'Jamie' },
    ]);

    protected readonly selectOptions = signal(['Ready', 'Review', 'Draft', 'Queued']);
    protected readonly selectedOption = signal('Ready');
}
