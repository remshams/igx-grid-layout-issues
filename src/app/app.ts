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
    template: `
        <div class="page">
            <igx-grid class="grid" [data]="rows()" [autoGenerate]="false" width="100%" height="360px">
                <igx-grid-toolbar>
                    <igx-grid-toolbar-title>IGX Repro Grid</igx-grid-toolbar-title>
                    <igx-grid-toolbar-actions>
                        <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
                        <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
                    </igx-grid-toolbar-actions>
                </igx-grid-toolbar>

                <igx-column field="id" header="ID"></igx-column>
                <igx-column field="product" header="Product"></igx-column>
                <igx-column field="status" header="Status"></igx-column>
                <igx-column field="owner" header="Owner"></igx-column>
            </igx-grid>

            <igx-select class="control" [value]="selectedOption()" placeholder="Select a sample state">
                @for (option of selectOptions(); track option) {
                    <igx-select-item [value]="option">{{ option }}</igx-select-item>
                }
            </igx-select>

            <button igxButton="contained" type="button">Run Repro</button>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
                min-height: 100vh;
            }

            .page {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                min-height: 100vh;
                padding: 1.5rem;
                box-sizing: border-box;
            }

            .grid {
                width: 100%;
            }

            .control,
            button[igxButton] {
                width: min(18rem, 100%);
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
    protected readonly rows = signal<SampleRow[]>([
        { id: 1001, product: 'Grid Toolbar', status: 'Ready', owner: 'Alex' },
        { id: 1002, product: 'Column Pinning', status: 'Review', owner: 'Sam' },
        { id: 1003, product: 'Column Hiding', status: 'Ready', owner: 'Jordan' },
        { id: 1004, product: 'Select Control', status: 'Draft', owner: 'Casey' },
        { id: 1005, product: 'Button Action', status: 'Queued', owner: 'Taylor' },
    ]);

    protected readonly selectOptions = signal(['Ready', 'Review', 'Draft', 'Queued']);
    protected readonly selectedOption = signal('Ready');
}
